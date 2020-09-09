const DiseaseModel = require("./disease.model");

const DiseaseController = {
  create: async (req, res) => {
    console.log(req.body);
    try {
      const disease = new DiseaseModel(req.body);
      const data = await disease.save();
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

module.exports = DiseaseController;
