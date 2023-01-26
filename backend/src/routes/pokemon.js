const express = require("express");
const pokemonSchema = require("../models/pokemon");
const router = express.Router();

// create pokemon
router.post("/pokemons", (req, res) => {
  const pokemon = pokemonSchema(req.body);
  pokemon
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});
//get all pokemons
router.get("/pokemons", (req, res) => {
  pokemonSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});
//get a  single pokemon
router.get("/pokemons/:id", (req, res) => {
  const { id } = req.params;
  pokemonSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});
//update a single pokemon
router.put("/pokemons/:id", (req, res) => {
  const { id } = req.params;
  const { name, type, attack, weight, listNumber } = req.body;
  pokemonSchema
    .updateOne(
      { _id: id },
      { $set: { name, type, attack, weight, listNumber } }
    )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});
//delete a  pokemon
router.delete("/pokemons/:id", (req, res) => {
  const { id } = req.params;
  pokemonSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
