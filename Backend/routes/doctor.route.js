const {Router} = require('express');
const doctorRoute = Router();

const {verifyRole}=require("../middlewares/verifyRole.middleware");
const {auth}=require("../middlewares/auth.middleware")
const {doctorAdd,doctorGetAll,doctorUpdate,doctorDelete}=require("../controllers/doctor.controller")

doctorRoute.post("/add",auth,verifyRole(["Admin"]),doctorAdd)
doctorRoute.get("/getAll",auth,doctorGetAll)
doctorRoute.patch("/update",auth,verifyRole(["Admin"]),doctorUpdate)
doctorRoute.delete("/delete",auth,verifyRole(["Admin"]),doctorDelete)

module.exports = {doctorRoute}