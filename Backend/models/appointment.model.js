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


// "user":"saman@gmail.com",
// "doctor":"drbhai@gmail.com",
// "startTime":"2021-06-22T21:30:34.736+00:00"
