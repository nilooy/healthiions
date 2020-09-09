const PrescriptiontModel = require("./prescription.model");

const PatientController = {
  create: async (req, res) => {
    console.log(req.body);
    try {
      const prescription = new PrescriptionModel(req.body);
      const data = await prescription.save();
      data.password = undefined;
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },

  read: async (req, res) => {
    try {
    } catch (error) {}
  },

  update: async (req, res) => {
    try {
    } catch (error) {}
  },

  delete: async (req, res) => {
    try {
    } catch (error) {}
  },
};

module.exports = PrescriptionController;
