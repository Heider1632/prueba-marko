const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CursoSchema = new Schema({
nombre:String,
duración:Number,
horario:String,
idestudiantes:[{type:Schema.Types.ObjectId,ref:"Estudiantes"}],
idtematicas:[{type:Schema.Types.ObjectId,ref:"Tematicas"}]
});

module.exports = mongoose.model("Curso", CursoSchema);
