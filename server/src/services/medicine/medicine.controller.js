const MedicineModel = require("./medicine.model");
const CrudController = require("../crud");

const MedicineController = {
  create: (req, res) => CrudController.create(req, res, MedicineModel),
  readOne: (req, res) => CrudController.readOne(req, res, MedicineModel),
  readMany: (req, res) => CrudController.readMany(req, res, MedicineModel),
  update: (req, res) => CrudController.update(req, res, MedicineModel),
  delete: (req, res) => CrudController.delete(req, res, MedicineModel),
};

module.exports = MedicineController;
