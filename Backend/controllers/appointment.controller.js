const { Appointment } = require("../models/appointment.model");

const appointmentAdd = async (req, res) => {
  const { email, time } = req.body;
  try {
    const data = new Appointment({ email, time });
    await data.save();
    return res
      .status(200)
      .send({ msg: "New Appointment has been added", data: data });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const appointmentGetAll = async (req, res) => {
  try {
    const { email } = req.params.email;
    const AppointmentGet = await Appointment.find({ doctor: email });
    res.status(200).send(AppointmentGet);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const appointmentGetday = async (req, res) => {
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;
  try {
    let hooper = Appointment.aggregate([
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

const appointmentUpdate = async (req, res) => {
  try {
    const { email, date } = req.params;
    const updatedSlot = req.body;
    const slot = await Appointment.findOneAndUpdate(
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

const appointmentDelete = async (req, res) => {
  try {
    const { email, date } = req.params;
    const slot = await Appointment.findOneAndRemove({ email, date });
    if (!slot) {
      return res.status(404).json({ message: "Slot not found" });
    }
    res.json({ message: "Slot deleted successfully", slot });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  appointmentAdd,
  appointmentGetAll,
  appointmentGetday,
  appointmentUpdate,
  appointmentDelete,
};
