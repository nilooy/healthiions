const PatientModel = require("./patient.model");
const CrudController = require("../crud");

const PatientController = {
  create: (req, res) => CrudController.create(req, res, PatientModel),
  readOne: (req, res) => CrudController.readOne(req, res, PatientModel),
  readMany: (req, res) => CrudController.readMany(req, res, PatientModel),
  update: (req, res) => CrudController.update(req, res, PatientModel),
  delete: (req, res) => CrudController.delete(req, res, PatientModel),
};

module.exports = PatientController;
