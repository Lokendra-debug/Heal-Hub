const mongoose = require("mongoose");

const availabilitySlotSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
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
