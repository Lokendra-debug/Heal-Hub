const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: {
    type: Number,
    required: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit contact number"],
  },
  specialties: [{ type: String, required: true }],
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = { Doctor };
