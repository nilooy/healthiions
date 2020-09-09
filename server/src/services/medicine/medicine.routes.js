const MedicineRouter = require("express").Router();
const MedicineController = require("./medicine.controller");

const createRoute = "/medicine/create";
const readRoute = "/medicine/read/:id";
const readManyRoute = "/medicine/read_all";
const updateRoute = "/medicine/update";
const deleteRoute = "/medicine/delete";

//=================================================>
// Create :: POST
//=================================================>
MedicineRouter.post(createRoute, MedicineController.create);

//=================================================>
// ReadOne :: GET
//=================================================>
MedicineRouter.get(readRoute, MedicineController.readOne);

//=================================================>
// ReadMany :: GET
//=================================================>
MedicineRouter.get(readManyRoute, MedicineController.readMany);

//=================================================>
// Update :: PUT
//=================================================>
MedicineRouter.put(updateRoute, MedicineController.update);

//=================================================>
// Delete :: DELETE
//=================================================>
MedicineRouter.delete(deleteRoute, MedicineController.delete);

module.exports = MedicineRouter;
