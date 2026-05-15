const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    patientName: String,
    patientNIC: String,
    department: String,
    doctorName: String,
    appointmentDate: String,
    appointmentTime: String,
    status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Booking', BookingSchema);