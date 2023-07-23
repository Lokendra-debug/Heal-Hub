const { Doctor } = require("../models/doctor.model");

const doctorAdd = async (req, res) => {
  const { name, email, contact, specialties } = req.body;
  try {
    const data = new Doctor({ name, email, contact, specialties });
    await data.save();
    return res
      .status(200)
      .send({ msg: "New Doctor has been added", data: data });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const doctorGetAll = async (req, res) => {
  try {
    const { email } = req.params.email;
    const doctorGet = await Doctor.find({ doctor: email });
    res.status(200).send(doctorGet);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const doctorUpdate = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const doctorDelete = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { doctorAdd, doctorGetAll, doctorUpdate, doctorDelete };
