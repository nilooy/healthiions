const DoctorModel = require("./doctor.model");
const CrudController = require("../crud");

const DoctorsController = {
  create: (req, res) => CrudController.create(req, res, DoctorModel),
  readOne: (req, res) => CrudController.readOne(req, res, DoctorModel),
  readMany: (req, res) => CrudController.readMany(req, res, DoctorModel),
  update: (req, res) => CrudController.update(req, res, DoctorModel),
  delete: (req, res) => CrudController.delete(req, res, DoctorModel),
};

module.exports = DoctorsController;
