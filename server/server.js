const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const app = express();

const QRCode = require('qrcode');

app.use(express.json()); // This allows the server to read data sent to it
app.use(cors());


// Tell the server to connect to your MongoDB Compass database
mongoose.connect('mongodb://localhost:27017/hospital_db')
    .then(() => console.log("✅ The brain is connected to the database!"))
    .catch((err) => console.log("❌ Connection error:", err));

// A test route to see if it works
app.get('/', (req, res) => {
    res.send("Server is running and database is linked!");
});

// Import our "Blueprint" (Schema) from the models folder
const DChannel = require('./models/ChannellingSystem');
const MedicalCheckup = require('./models/MedicalCheckups');

// This is the "Order Desk"
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


app.post('/api/checkup', async (req, res) => {
    try {
      // 🌟 FIX 1: Rename 'package' to 'medicalPackage' during destructuring to avoid the reserved keyword
      const { patientName, patientNIC, package: medicalPackage, appointmentDate, timeSlot } = req.body;
        
      if (!timeSlot) {
        return res.status(400).json({ error: "Please select a medical checkup time slot." });
      }
  
      // Count existing checkup appointments for this specific package, date, and slot
      // 🌟 FIX 2: Map the schema key 'package' to our safe local variable 'medicalPackage'
      const existingMedicalCheckupCount = await MedicalCheckup.countDocuments({
        package: medicalPackage,
        appointmentDate,
        timeSlot
      });
  
      const nextTokenNumber = existingMedicalCheckupCount + 1;
      const calculatedToken = `${nextTokenNumber}${timeSlot}`; // Generates tokens like "1L", "2M"
  
      // 🌟 FIX 3: Assign the values cleanly into your Mongoose model instantiation
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

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is listening at http://localhost:${PORT}`);
});

