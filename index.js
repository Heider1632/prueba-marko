require("marko/node-require"); // Allow Node.js to require and load `.marko` files

const express=require("express");
const mongoose = require("mongoose");
const path = require('path');
const markoExpress = require('marko/express');
const morgan = require('morgan');

const app= express();

app.set('views', path.join(__dirname, 'views'));

app.use(markoExpress()); //enable res.marko(template, data)

app.use(morgan('dev'));

const template = require('./views/button');

app.get("/", function(req, res) {
  res.marko(template, {
    name: "Frank",
    count: 30,
    colors: ["red", "green", "blue"]
  });
});

//nuevo
const bodyParser= require("body-parser");

app.use(bodyParser.json());
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("access-control-allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
  next();
});
mongoose
  .connect(
     "mongodb://localhost/fotografia",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);

  });
//estudiante
  var estudiante = require("./lib/Estudiante");

app.get("/estudiantes", (req, res) => {
  estudiante.getEstudiantes(req, res);
});

app.get("/estudiantes/:id", (req, res) => {
  estudiante.getEstudiante(req, res);
});

app.post("/estudiantes", (req, res) => {
  estudiante.newEstudiante(req, res);
});

app.put("/estudiantes/:id", (req, res) => {
  estudiante.updateEstudiante(req, res);
});

app.delete("/estudiantes/:id", (req, res) => {
  estudiante.deleteEstudiante(req, res);
});

//docente
var docente = require("./lib/Docente");

app.get("/docentes", (req, res) => {
docente.getDocentes(req, res);
});

app.get("/docentes/:id", (req, res) => {
docente.getDocente(req, res);
});

app.post("/docentes", (req, res) => {
docente.newDocente(req, res);
});

app.put("/docentes/:id", (req, res) => {
docente.updateDocente(req, res);
});

app.delete("/docentes/:id", (req, res) => {
docente.deleteDocente(req, res);
});
//curso
var curso = require("./lib/Curso");

app.get("/cursos", (req, res) => {
curso.getCursos(req, res);
});

app.get("/cursos/:id", (req, res) => {
curso.getCurso(req, res);
});

app.post("/cursos", (req, res) => {
curso.newCurso(req, res);
});

app.put("/cursos/:id", (req, res) => {
curso.updateCurso(req, res);
});

app.delete("/cursos/:id", (req, res) => {
curso.deleteCurso(req, res);
});
//tematica
var tematica = require("./lib/Tematica");

app.get("/tematicas", (req, res) => {
tematica.getTematicas(req, res);
});

app.get("/tematicas/:id", (req, res) => {
tematica.getTematica(req, res);
});

app.post("/tematicas", (req, res) => {
tematica.newTematica(req, res);
});

app.put("/tematicas/:id", (req, res) => {
tematica.updateTematica(req, res);
});

app.delete("/tematicas/:id", (req, res) => {
tematica.deleteTematica(req, res);
});
//fotografia
var fotografia = require("./lib/Fotografia");

app.get("/fotografias", (req, res) => {
fotografia.getFotografias(req, res);
});

app.get("/fotografias/:id", (req, res) => {
fotografia.getFotografia(req, res);
});

app.post("/fotografias", (req, res) => {
fotografia.newFotografia(req, res);
});

app.put("/fotografias/:id", (req, res) => {
fotografia.updateFotografia(req, res);
});

app.delete("/fotografias/:id", (req, res) => {
tematica.deleteFotografia(req, res);
});
// escuchamos
app.listen(3000);
console.log(`Server on %s ${app.settings.env}`);
