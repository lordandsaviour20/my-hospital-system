const mongoose = require('mongoose');

const medicalCheckupSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  patientNIC: { type: String, required: true },
  package: { type: String, required: true },         // e.g., "Basic Health Track"
  appointmentDate: { type: String, required: true }, // YYYY-MM-DD
  timeSlot: { type: String, required: true },        // e.g., "L", "M", "N"
  tokenNumber: { type: String, required: true },     // Tracked sequence (e.g., "1L")
  bookedAt: { type: Date, default: Date.now }
});

// This will automatically generate a collection named 'medicalcheckups' in MongoDB
module.exports = mongoose.model('MedicalCheckup', medicalCheckupSchema);