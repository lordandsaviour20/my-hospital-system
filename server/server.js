const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const app = express();
app.use(express.json()); // This allows the server to read data sent to it
app.use(cors());


// 1. Tell the server to connect to your MongoDB Compass database
mongoose.connect('mongodb://localhost:27017/hospital_db')
    .then(() => console.log("✅ The brain is connected to the database!"))
    .catch((err) => console.log("❌ Connection error:", err));

// 2. A test route to see if it works
app.get('/', (req, res) => {
    res.send("Server is running and database is linked!");
});

// Import our "Blueprint" (Schema) from the models folder
const Booking = require('./models/Booking');

// This is the "Order Desk"
app.post('/api/book', async (req, res) => {
    try {
        // Create a new booking using the data sent from the user (req.body)
        const newBooking = new Booking({
            patientName: req.body.patientName,
            doctorName: req.body.doctorName,
            appointmentDate: req.body.appointmentDate,
            appointmentTime: req.body.appointmentTime
        });

        // Save it to MongoDB
        await newBooking.save();
        
        res.status(201).json({ message: "Booking successful!" });
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is listening at http://localhost:${PORT}`);
});

