import axios from 'axios'

const baseUrl = " https://pokeapi.co/api/v2/pokemon/";
 const getPokemon = async (id) => {
  try {
   const { data } = await axios.get(`${baseUrl}${id}`)
   return data;
  } catch (error) {
   console.log(error);
  }

};


export default {getPokemon}