const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "name not present"] },
    email: {
      type: String,
      required: [true, "email not present"],
      unique: true,
    },
    password: { type: String, required: [true, "password not present"] },
    role: {
      type: String,
      required: true,
      default: "User",
      enum: ["User", "Admin"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };

// "name":"saman",
// "email":"saman@gmail.com",
// "password":"1234",
// "role":"Admin"

// "msg": "login successfully",
// "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGJkNTg0MjM4ZjJkMDU3ZjAwYTZhZGEiLCJ1c2VyUm9sZSI6IlVzZXIiLCJpYXQiOjE2OTAxMzA2ODMsImV4cCI6MTY5MDEzNDI4M30.HDC_ysg8asrCHZDy7OXgYDomB3DwFORDD7wDadmwNyM",
// "rerefreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGJkNTg0MjM4ZjJkMDU3ZjAwYTZhZGEiLCJ1c2VyUm9sZSI6IlVzZXIiLCJpYXQiOjE2OTAxMzA2ODMsImV4cCI6MTY5MDczNTQ4M30.Kp8g89-2x5O4-E0751GpRqzwVlAhOGOkxMtTwocKpIA"
