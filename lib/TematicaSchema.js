const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TematicaSchema = new Schema({
  nombre:String,
  contenido:String,
  idfotografias:[{type:Schema.Types.ObjectId,ref:"Fotografias"}]
});

module.exports = mongoose.model("Tematica", TematicaSchema);
