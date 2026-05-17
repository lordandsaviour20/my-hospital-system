const mongoose = require('mongoose');

const DChannelSchema = new mongoose.Schema({
    patientName: String,
    patientNIC: String,
    department: String,
    doctorName: String,
    appointmentDate: String,
    timeSlot: String,      // Stores 'A', 'B', 'C', or 'D'
    tokenNumber: String,   // Combines order and letter (e.g., "10A")
    bookedAt: { type: Date, default: Date.now },
    status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('DChannel', DChannelSchema);