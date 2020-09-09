const NextRouter = require("express").Router();
const NextController = require("./next.controller");

const createRoute = "/next/create";
const readRoute = "/next/read";
const updateRoute = "/next/update";
const deleteRoute = "/next/delete";

//=================================================>
// Create :: POST
//=================================================>
NextRouter.post(createRoute, NextController.create);

//=================================================>
// Read :: GET
//=================================================>
NextRouter.post(readRoute, NextController.read);

//=================================================>
// Update :: PUT
//=================================================>
NextRouter.post(updateRoute, NextController.update);

//=================================================>
// Delete :: DELETE
//=================================================>
NextRouter.post(deleteRoute, NextController.delete);

module.exports = NextRouter;
