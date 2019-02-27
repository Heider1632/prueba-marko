const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FotografiaSchema = new Schema({
url:String,
puntuación:Number,
});

module.exports = mongoose.model("Fotografia",FotografiaSchema);
