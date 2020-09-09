const NextModels = require("./next.models");

class NextController {
  //=================================================>
  // Create :: POST
  //=================================================>
  static create = (req, res) => {
    const next = new NextModels(req.body);

    next.save((err, data) => {
      if (err) return res.status(400).json(err);

      res.json(data);
    });
  };

  //=================================================>
  // Read :: GET
  //=================================================>
  static read = (req, res) => {
    NextModels.findById(req.params.id).exec((err, data) => {
      if (err) return res.status(400).json(err);

      res.json(data);
    });
  };

  //=================================================>
  // Update :: PUT
  //=================================================>
  static update = (req, res) => {
    NextModels.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      (err, data) => {
        if (err) return res.status(400).json(err);

        res.json(data);
      }
    );
  };

  //=================================================>
  // Delete :: DELETE
  //=================================================>
  static delete = (req, res) => {
    NextModels.findByIdAndRemove(req.params.id, (err, data) => {
      if (err) return res.status(400).json(err);

      res.json(data);
    });
  };
}

module.exports = NextController;
