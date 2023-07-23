const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  user: {
    type: String,
    ref: "User",
    required: true,
  },
  doctor: {
    type: String,
    ref: "Doctor",
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  // Add other appointment-related fields here
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = { Appointment };
