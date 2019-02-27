const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstudianteSchema = new Schema({
nombre:String,
apellidos:String,
celular:Number,
correo:String,
idcursos:[{type:Schema.Types.ObjectId,ref:"Cursos"}],

});

module.exports = mongoose.model("Estudiante", EstudianteSchema);
