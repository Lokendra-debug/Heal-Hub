const {Router} = require('express');
const userRoute = Router();

const {verifyRole}=require("../middlewares/verifyRole.middleware");
const {auth}=require("../middlewares/auth.middleware")
const {register,login,logout}=require("../controllers/user.controller")

userRoute.post("/register",register)
userRoute.post("/login",login)
userRoute.post("/logout",auth,logout)

module.exports = {userRoute}