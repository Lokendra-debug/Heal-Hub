const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar:{ type: String},
  contact: {
    type: Number,
    required: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit contact number"],
  },
  specialties: [{ type: String, required: true }],
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = { Doctor };

// "name":"drbhai",
// "email":"drbhai@gmail.com",
// "avatar":"",
// "contact":1234567890,
// "specialties":"heart"