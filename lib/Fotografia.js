const Fotografia = require("./FotografiaSchema");
exports.getFotografias = (req, res) => {
  Fotografia.find((err, fotografia) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(fotografia);
  });
};

exports.getFotografia = (req, res) => {
  let id = req.params.id;

  Fotografia.find({ _id: id }, (err, fotografia) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(fotografia);
  });
};

exports.newFotografia = (req, res) => {
  const newFotografia = new Fotografia(req.body);
  newFotografia.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newFotografia);
  });
};

exports.updateFotografia = (req, res) => {
  let fotografia = req.body;
  Fotografia.findOneAndUpdate(
    { _id: req.params.id },
    fotografia,
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};
exports.deleteFotografia = (req, res) => {
  Fotografia.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
