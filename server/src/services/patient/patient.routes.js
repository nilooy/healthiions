const PatientRouter = require("express").Router();
const PatientController = require("./patient.controller");

const createRoute = "/patient/create";
const readRoute = "/patient/read/:id";
const readManyRoute = "/patient/read_all";
const updateRoute = "/patient/update";
const deleteRoute = "/patient/delete";

//=================================================>
// Create :: POST
//=================================================>
PatientRouter.post(createRoute, PatientController.create);

//=================================================>
// Read One :: GET
//=================================================>
PatientRouter.get(readRoute, PatientController.readOne);

//=================================================>
// Read Many :: GET
//=================================================>
PatientRouter.get(readManyRoute, PatientController.readMany);

//=================================================>
// Update :: PUT
//=================================================>
PatientRouter.put(updateRoute, PatientController.update);

//=================================================>
// Delete :: DELETE
//=================================================>
PatientRouter.delete(deleteRoute, PatientController.delete);

module.exports = PatientRouter;
