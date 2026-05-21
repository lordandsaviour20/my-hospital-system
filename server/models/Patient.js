const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  wardNo: { type: String, required: true },
  bedNo: { type: String, required: true },
  admittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Patient', patientSchema);