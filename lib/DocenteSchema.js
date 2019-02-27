const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocenteSchema = new Schema({
  nombre:String,
  apellido:String,
  profeción:String,
  celular:Number,
  correo:String,
  idcursos:[{type:Schema.Types.ObjectId,ref:"Cursos"}],
  idestudiantes:[{type:Schema.Types.ObjectId,ref:"Estudiantes"}]
});

module.exports = mongoose.model("Docente", DocenteSchema);
