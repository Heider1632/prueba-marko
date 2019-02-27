const Docente = require("./DocenteSchema");
exports.getDocentes = (req, res) => {
  Docente.find((err, docente) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(docente);
  });
};

exports.getDocente = (req, res) => {
  let id = req.params.id;

  Docente.find({ _id: id }, (err, docente) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(docente);
  });
};

exports.newDocente = (req, res) => {
  const newDocente = new Docente(req.body);
  newDocente.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newDocente);
  });
};

exports.updateDocente = (req, res) => {
  let nombre = req.body.nombre;
  Docente.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};
exports.deleteDocente = (req, res) => {
  Docente.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
