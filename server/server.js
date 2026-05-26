const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const QRCode = require('qrcode');

const app = express();

app.use(express.json()); // Allows the server to read data sent to it
app.use(cors());

const DChannel = require('./models/ChannellingSystem');
const MedicalCheckup = require('./models/MedicalCheckups');
const Patient = require('./models/Patient');              
const VisitingPass = require('./models/VisitingPass');    

mongoose.connect('mongodb://127.0.0.1:27017/hospital_db')
    .then(() => {
        console.log("✅ The brain is connected to the database!");
    })
    .catch((err) => console.log("❌ Connection error:", err));

// A test route to see if it works
app.get('/', (req, res) => {
    res.send("Server is running and database is linked!");
});


//  DOCTOR CHANNELLING SYSTEM ENDPOINT

app.post('/api/book', async (req, res) => {
    try {
        const { patientName, patientNIC, department, doctorName, appointmentDate, timeSlot } = req.body;

        // Validation check
        if (!timeSlot) {
            return res.status(400).json({ error: "Please select an available time slot." });
        }

        //Count existing bookings for this exact doctor, date, and slot to calculate the order number
        const existingDChannelCount = await DChannel.countDocuments({
         doctorName: doctorName,
         appointmentDate: appointmentDate,
         timeSlot: timeSlot
        });        

        const nextOrderNumber = existingDChannelCount + 1;
        const calculatedToken = `${nextOrderNumber}${timeSlot}`; // e.g., "1A" or "10B"

        // Create a new booking using the data sent from the user (req.body)
        const newDChannel = new DChannel({
            patientName,
            patientNIC,
            department,
            doctorName,
            appointmentDate,
            timeSlot,
            tokenNumber: calculatedToken // Saves the real token directly to MongoDB
        });

        // Save it to MongoDB
        await newDChannel.save();

        //Generate the QR code containing the generated token data
        const qrCodeUrl = await QRCode.toDataURL(JSON.stringify({
            bookingId: newDChannel._id.toString(),
            token: calculatedToken,
            patient: patientName,
            doctor: doctorName,
            date: appointmentDate,
            slot: timeSlot
        }))

        // CRITICAL: Send tokenNumber back so React can display it!
        res.status(201).json({
            message: "Booking recorded successfully",
            tokenNumber: calculatedToken, // This matches what React is looking for!
            qrCode: qrCodeUrl
        });
        
        } catch (err) {
            console.error("Backend Error:", err);
            res.status(500).json({ error: "Database transaction failed. Check server terminal logs." });
        }
});

//  MEDICAL CHECKUP SYSTEM ENDPOINT

app.post('/api/checkup', async (req, res) => {
    try {
      // FIX 1: Rename 'package' to 'medicalPackage' during destructuring to avoid the reserved keyword
      const { patientName, patientNIC, package: medicalPackage, appointmentDate, timeSlot } = req.body;

      if (!timeSlot) {
        return res.status(400).json({ error: "Please select a medical checkup time slot." });
      }
  
      // Count existing checkup appointments for this specific package, date, and slot
      // FIX 2: Map the schema key 'package' to our safe local variable 'medicalPackage'
      const existingMedicalCheckupCount = await MedicalCheckup.countDocuments({
        package: medicalPackage,
        appointmentDate,
        timeSlot
      });
  
      const nextTokenNumber = existingMedicalCheckupCount + 1;
      const calculatedToken = `${nextTokenNumber}${timeSlot}`; // Generates tokens like "1L", "2M"
  
      // FIX 3: Assign the values cleanly into your Mongoose model instantiation
      const newMedicalCheckup = new MedicalCheckup({
        patientName,
        patientNIC,
        package: medicalPackage,
        appointmentDate,
        timeSlot,
        tokenNumber: calculatedToken
      });
  
      await newMedicalCheckup.save();
  
      // Create a distinct QR dataset for health screening processing
      const qrCodeUrl = await QRCode.toDataURL(JSON.stringify({
        bookingId: newMedicalCheckup._id.toString(),
        token: calculatedToken,
        patient: patientName,
        type: "Medical Checkup",
        package: medicalPackage, // Using the safe variable name here
        date: appointmentDate
      }));
  
      res.status(201).json({
        message: "Medical check-up confirmed successfully",
        tokenNumber: calculatedToken,
        qrCode: qrCodeUrl
      });
  
    } catch (err) {
      console.error("Checkup Server Error:", err);
      res.status(500).json({ error: "Database transaction failed for checkup processing." });
    }
});

//  VISITING PASS SYSTEM ENDPOINTS
  
  // 1. FIND ADMITTED PATIENT BY LOCATION
  app.get('/api/visiting/patient', async (req, res) => {
    try {
      const { wardNo, bedNo } = req.query;
      const patient = await Patient.findOne({ wardNo, bedNo });
      
      if (!patient) {
        return res.status(404).json({ error: "No active patient found in specified Ward & Bed allocation." });
      }
      res.json({ patientName: patient.patientName, patientId: patient._id });
    } catch (err) {
      res.status(500).json({ error: "Patient registry lookup failure." });
    }
  });
  
  // 2. BOOK PASS WITH MINUTE-BY-MINUTE TIMELINE CAP VALIDATION
  app.post('/api/visiting/book', async (req, res) => {
    try {
      const { patientId, visitorName, visitDate, slotId, selectedTimeStr, durationMinutes } = req.body;
      
      // Parse time boundaries (e.g., visitDate + "06:45")
      const startTime = new Date(`${visitDate}T${selectedTimeStr}:00`);
      const endTime = new Date(startTime.getTime() + durationMinutes * 60 * 1000);
  
      if (durationMinutes > 30) {
        return res.status(400).json({ error: "Maximum individual visiting duration limit is 30 minutes." });
      }
  
      // Pull all existing passes for this specific patient bed on this date
      const overlappingPasses = await VisitingPass.find({
        patientId,
        visitDate,
        slotId,
        $or: [
          { startTime: { $lt: endTime }, endTime: { $gt: startTime } }
        ]
      });
  
      // Check capacity for every single minute of the proposed visit duration
      for (let min = 0; min < durationMinutes; min++) {
        const checkPoint = new Date(startTime.getTime() + min * 60 * 1000);
        
        const concurrentVisitors = overlappingPasses.filter(pass => 
          checkPoint >= pass.startTime && checkPoint < pass.endTime
        ).length;
  
        if (concurrentVisitors >= 4) {
          return res.status(400).json({ 
            error: "Capacity limit reached. This specific time range exceeds the maximum of 4 concurrent bedside visitors." 
          });
        }
      }
  
      // Capacity check passed! Calculate the sequence token (e.g., V2-03)
      const cumulativeDailyCount = await VisitingPass.countDocuments({ visitDate, slotId });
      const orderNumber = String(cumulativeDailyCount + 1).padStart(2, '0');
      const tokenNumber = `${slotId}-${orderNumber}`;
  
      const newPass = new VisitingPass({
        patientId,
        visitorName,
        visitDate,
        slotId,
        startTime,
        endTime,
        tokenNumber
      });
      await newPass.save();
  
      // Generate specialized QR verification dataset
      const qrCodeUrl = await QRCode.toDataURL(JSON.stringify({
        passId: newPass._id,
        token: tokenNumber,
        visitor: visitorName,
        window: `${selectedTimeStr} (${durationMinutes} mins)`,
        type: "Visitor Security Clearance"
      }));
  
      res.status(201).json({ tokenNumber, qrCode: qrCodeUrl });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to allocate visiting registration pass." });
    }
  });

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is listening at http://localhost:${PORT}`);
});