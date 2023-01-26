import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/pokemons";
const getPokemons = async () => {
  try {
    const { data } = await axios.get(baseUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const addPokemon = async (payload) => {
  try {
    const res = await axios.post(baseUrl, payload);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default { addPokemon, getPokemons };
