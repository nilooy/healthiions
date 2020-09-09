const DoctorRouter = require("express").Router();
const DoctorController = require("./doctor.controller");

const createRoute = "/doctor/create";
const readRoute = "/doctor/read/:id";
const readManyRoute = "/doctor/read_all";
const updateRoute = "/doctor/update";
const deleteRoute = "/doctor/delete";

//=================================================>
// Create :: POST
//=================================================>
DoctorRouter.post(createRoute, DoctorController.create);

//=================================================>
// Read One :: GET
//=================================================>
DoctorRouter.get(readRoute, DoctorController.readOne);
//=================================================>
// Read Many :: GET
//=================================================>
DoctorRouter.get(readManyRoute, DoctorController.readMany);

//=================================================>
// Update :: PUT
//=================================================>
DoctorRouter.put(updateRoute, DoctorController.update);

//=================================================>
// Delete :: DELETE
//=================================================>
DoctorRouter.delete(deleteRoute, DoctorController.delete);

module.exports = DoctorRouter;
