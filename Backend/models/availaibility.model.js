const mongoose = require("mongoose");

const availabilitySlotSchema = new mongoose.Schema({
  doctor: {
    type: String,
    ref: "Doctor",
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
});

const AvailabilitySlot = mongoose.model("Availability", availabilitySlotSchema);

module.exports = { AvailabilitySlot };


// "doctor":"druncle@gmail.com",
// "startTime":"2002-02-24"
