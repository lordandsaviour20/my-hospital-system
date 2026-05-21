const mongoose = require('mongoose');

const visitingPassSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  visitorName: { type: String, required: true },
  visitDate: { type: String, required: true },      // YYYY-MM-DD
  slotId: { type: String, required: true },         // "V1", "V2", "V3"
  startTime: { type: Date, required: true },        // Full JS timestamp of entry
  endTime: { type: Date, required: true },          // Full JS timestamp of exit
  tokenNumber: { type: String, required: true },    // e.g., "V2-03"
  bookedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('VisitingPass', visitingPassSchema);