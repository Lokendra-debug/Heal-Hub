const { Router } = require("express");
const appointmentRoute = Router();

const { verifyRole } = require("../middlewares/verifyRole.middleware");
const { auth } = require("../middlewares/auth.middleware");
const {
  appointmentAdd,
  appointmentGetAll,
  appointmentGetday,
  appointmentUpdate,
  appointmentDelete,
} = require("../controllers/appointment.controller");

appointmentRoute.post("/add", auth, appointmentAdd);
appointmentRoute.get("/getAll/:email", auth, appointmentGetAll);
appointmentRoute.get("/getAll/", auth, appointmentGetday);
appointmentRoute.patch("/update", auth, appointmentUpdate);
appointmentRoute.delete("/delete", auth, appointmentDelete);

module.exports = { appointmentRoute };
