import React, { useEffect, useState } from 'react'
import logo from '../../assets/pokedex_logo.png'
import pokemonServices from '../../services/pokemonServices'
import Pokemon from './pokemon/Pokemon';
import Form from '../form.jsx/Form';
export default function Home() {
 const [pokemon, setPokemon] = useState(null);
 const [query, setQuery] = useState('ditto');
 useEffect(() => {
  pokemonServices.getPokemon(query).then(onSuccess).catch(console.error)
 }, [query])

 const onSuccess = (res) => {
  console.log(res)
  setPokemon(res)
 }

 return (
  <>
   <div className="flex flex-col p-5 w-full sm:w-10/12 mx-auto bg-red-500 justify-center content-center ">
    <img className='mx-auto mb-3' width='250px' src={logo} alt="pokedex_logo" />
    <div className="poke__container flex flex-col sm:flex-row rounded-xl shadow-xl">
     {/* profile__container */}
   <div className='w-full sm:w-6/12 mx-auto'>
   {pokemon && <Pokemon pokemonObj={pokemon} />}
   </div>
     {/* search__container */}
     <div className='w-full sm:w-6/12 mx-auto text-left my-auto justify-center '>
     <Form />
     </div>

    </div>
   </div>
  </>

 )
}


 // <div className=" flex flex-col sm:flex-row w-full bg-green-400 mx-auto sm:w-8/12">


 // </div>