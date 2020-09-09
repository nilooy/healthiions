const PatientRouter = require("express").Router();
const PatientController = require("./prescription.controller");

const createRoute = "/prescription/create";
const readRoute = "/prescription/read";
const updateRoute = "/prescription/update";
const deleteRoute = "/prescription/delete";

//=================================================>
// Create :: POST
//=================================================>
PrescriptionRouter.post(createRoute, PrescriptionController.create);

//=================================================>
// Read :: GET
//=================================================>
prescriptionRouter.post(readRoute, PrescriptionController.read);

//=================================================>
// Update :: PUT
//=================================================>
PrescriptionRouter.post(updateRoute, PrescriptionController.update);

//=================================================>
// Delete :: DELETE
//=================================================>
PrescriptionRouter.post(deleteRoute, PrescriptionController.delete);

module.exports = PrescriptionRouter;
