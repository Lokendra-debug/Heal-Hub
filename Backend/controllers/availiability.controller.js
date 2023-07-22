const { AvailabilitySlot } = require("../models/availaibility.model");

const availiabilityAdd = async (req, res) => {
  const { email, time } = req.body;
  try {
    const data = new AvailabilitySlot({ email, time });
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
    const { email } = req.params.email;
    const availiabilityGet = await AvailabilitySlot.find({ doctor: email });
    res.status(200).send(availiabilityGet);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const availiabilityGetday = async (req, res) => {
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;
  try {
    let hooper = AvailabilitySlot.aggregate([
      {
        $match: {
          startTime: {
            $gte: startDate,
            $lt: endDate,
          },
        },
      },
    ]);
    res.status(200).send(hooper);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.msg });
  }
};

const availiabilityUpdate = async (req, res) => {
  try {
    const { email, date } = req.params;
    const updatedSlot = req.body;
    const slot = await AvailabilitySlot.findOneAndUpdate(
      { email, date },
      updatedSlot,
      {
        new: true,
      }
    );
    res.json(slot);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const availiabilityDelete = async (req, res) => {
  try {
    const { email, date } = req.params;
    const slot = await AvailabilitySlot.findOneAndRemove({ email, date });
    if (!slot) {
      return res.status(404).json({ message: "Slot not found" });
    }
    res.json({ message: "Slot deleted successfully", slot });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  availiabilityAdd,
  availiabilityGetAll,
  availiabilityGetday,
  availiabilityUpdate,
  availiabilityDelete,
};
