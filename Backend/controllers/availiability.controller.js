const { AvailabilitySlot } = require("../models/availaibility.model");

const availiabilityAdd = async (req, res) => {
  const { id, time } = req.body;
  try {
    const data = new AvailabilitySlot({ id, time });
    await data.save();
    return res
      .status(200)
      .send({ msg: "New Availability slot has been added", data: data });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const availiabilityGetAll = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const availiabilityUpdate = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const availiabilityDelete = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  availiabilityAdd,
  availiabilityGetAll,
  availiabilityUpdate,
  availiabilityDelete,
};
