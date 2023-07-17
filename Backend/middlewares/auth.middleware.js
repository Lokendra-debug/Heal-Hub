const jwt = require("jsonwebtoken");
const { redis } = require("../database/redis")


require("dotenv").config()





module.exports = { auth };