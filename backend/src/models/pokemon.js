const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  name: { type: String, require: true },
  type: { type: String, require: false },
  attack: { type: String, require: false },
  weight: { type: String, require: false },
  listNumber: { type: Number, require: true },
});
module.exports = mongoose.model("Pokemon", pokemonSchema);
