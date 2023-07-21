const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialties: [{ type: String, required: true }],
  availability: [{ day: String, slots: [String] }],
  // Add more doctor-related fields as needed
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;