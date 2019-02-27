const Curso = require("./CursoSchema");
exports.getCursos = (req, res) => {
  Curso.find((err, curso) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(curso);
  });
};

exports.getCurso = (req, res) => {
  let id = req.params.id;

  Curso.find({ _id: id }, (err, curso) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(curso);
  });
};

exports.newCurso = (req, res) => {
  const newCurso = new Curso(req.body);
  newCurso.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newCurso);
  });
};

exports.updateCurso = (req, res) => {
  let nombre = req.body.nombre;
  Curso.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};
exports.deleteCurso = (req, res) => {
  Curso.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
