const fs = require("fs");

const ucFirst = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const controllerTemp = (name) => `const ${ucFirst(
  name
)}Models = require("./${name}.models");

  class ${ucFirst(name)}Controller {
    
//=================================================>
// Create :: POST
//=================================================>
    static create = (req, res) => {
      const ${name} = new ${ucFirst(name)}Models(req.body);
  
      ${name}.save((err, data) => {
        if (err) return res.status(400).json(err);
  
        res.json(data);
      });
    };
  
//=================================================>
// Read :: GET
//=================================================>
    static read = (req, res) => {
      ${ucFirst(name)}Models.findById(req.params.id).exec((err, data) => {
        if (err) return res.status(400).json(err);
  
        res.json(data);
      })
    };
  
//=================================================>
// Update :: PUT
//=================================================>
    static update = (req, res) => {
      ${ucFirst(name)}Models.findByIdAndUpdate(req.params.id , {
        $set : {...req.body}
    },
    (err, data) => {
      if (err) return res.status(400).json(err);

      res.json(data);
    }
)
    };
  
//=================================================>
// Delete :: DELETE
//=================================================>
    static delete = (req, res) => {
      ${ucFirst(name)}Models.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) return res.status(400).json(err);
  
        res.json(data);
      })
    };
  }
  
  module.exports = ${ucFirst(name)}Controller;`;

const modelTemp = (name) => `const mongoose = require("mongoose");

const ${ucFirst(name)}Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 40,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("${name}", ${ucFirst(name)}Schema);
`;

const routesTemp = (name) => `const ${ucFirst(
  name
)}Router = require("express").Router();
const ${ucFirst(name)}Controller = require("./${name}.controller");

const createRoute = "/${name}/create";
const readRoute = "/${name}/read";
const updateRoute = "/${name}/update";
const deleteRoute = "/${name}/delete";

//=================================================>
// Create :: POST
//=================================================>
${ucFirst(name)}Router.post(createRoute, ${ucFirst(name)}Controller.create);

//=================================================>
// Read :: GET
//=================================================>
${ucFirst(name)}Router.post(readRoute, ${ucFirst(name)}Controller.read);

//=================================================>
// Update :: PUT
//=================================================>
${ucFirst(name)}Router.post(updateRoute, ${ucFirst(name)}Controller.update);

//=================================================>
// Delete :: DELETE
//=================================================>
${ucFirst(name)}Router.post(deleteRoute, ${ucFirst(name)}Controller.delete);

module.exports = ${ucFirst(name)}Router;
`;

const indexTemp = (name) => `module.exports = requie('./${name}.routes.js')`;

const makeServices = (name) => {
  const path = "./src/services/";
  const folderToCreate = path + name;
  const controllerPath = path + name + "/" + name + ".controller.js";
  const modelPath = path + name + "/" + name + ".model.js";
  const routesPath = path + name + "/" + name + ".routes.js";
  const indexPath = path + name + "/" + "index" + ".js";

  fs.mkdir(folderToCreate, () => {
    fs.writeFileSync(controllerPath, controllerTemp(name));
    fs.writeFileSync(modelPath, modelTemp(name));
    fs.writeFileSync(routesPath, routesTemp(name));
    fs.writeFileSync(indexPath, indexTemp(name));
  });
};

module.exports = makeServices;
