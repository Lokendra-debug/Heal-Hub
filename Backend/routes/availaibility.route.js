const { Router } = require("express");
const availiabilityRoute = Router();

const { verifyRole } = require("../middlewares/verifyRole.middleware");
const { auth } = require("../middlewares/auth.middleware");
const {
  availiabilityAdd,
  availiabilityGetAll,
  availiabilityGetday,
  availiabilityUpdate,
  availiabilityDelete,
} = require("../controllers/availiability.controller");

availiabilityRoute.post("/add", auth, verifyRole(["Admin"]), availiabilityAdd);
availiabilityRoute.get("/getAll", auth, availiabilityGetAll);
// availiabilityRoute.get("/getAll/", auth, availiabilityGetday);
availiabilityRoute.patch(
  "/update",
  auth,
  verifyRole(["Admin"]),
  availiabilityUpdate
);
availiabilityRoute.delete(
  "/delete",
  auth,
  verifyRole(["Admin"]),
  availiabilityDelete
);

module.exports = { availiabilityRoute };
