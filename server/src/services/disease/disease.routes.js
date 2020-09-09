const DiseaseRouter = require("express").Router();
const DiseaseController = require("./disease.controller");

const createRoute = "/disease/create";
const readRoute = "/disease/read";
const updateRoute = "/disease/update";
const deleteRoute = "/disease/delete";

//=================================================>
// Create :: POST
//=================================================>
DiseaseRouter.post(createRoute, DiseaseController.create);

//=================================================>
// Read :: GET
//=================================================>
DiseaseRouter.post(readRoute, DiseaseController.read);

//=================================================>
// Update :: PUT
//=================================================>
DiseaseRouter.post(updateRoute, DiseaseController.update);

//=================================================>
// Delete :: DELETE
//=================================================>
DiseaseRouter.post(deleteRoute, DiseaseController.delete);

module.exports = DiseaseRouter;
