const CrudController = {
  //=================================================>
  // CREATE
  //=================================================>

  create: async (req, res, model) => {
    try {
      const newEntry = new model(req.body);
      const data = await newEntry.save();
      data.password = undefined;
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },

  //=================================================>
  // READ ONE
  //=================================================>

  readOne: async (req, res, model) => {
    try {
      const { id } = req.params;
      const data = await model.findById(id);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },

  //=================================================>
  // READ MANY
  //=================================================>

  readMany: async (req, res, model) => {
    try {
      let query = res.locals.query || {};
      const data = await model.find(query);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },

  //=================================================>
  // UPDATE
  //=================================================>

  update: async (req, res, model) => {
    try {
      const data = await model.update(
        { _id: req.params._id },
        { $set: req.body }
      );
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },

  //=================================================>
  // DELETE
  //=================================================>

  delete: async (req, res, model) => {
    try {
      const data = await model.remove({ _id: req.params._id });
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
};

module.exports = CrudController;
