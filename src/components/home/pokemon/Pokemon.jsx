import React from 'react'
import './styles.scss'
export default function Pokemon({pokemonObj}) {
 const type = pokemonObj.types[0].type.name


  return (
   <>
    <div className={` flex flex-col ${type} sm:h-auto w-auto m-1 md:w-8/12 content-center rounded-lg sm:mx-auto `}>
     <div className='flex content-between'>
      <h3 className='w-9/12'></h3>
      {/* <h3 className='bg-white  p-1 rounded-lg shadow-xl  text-left'> #{pokemonObj.id}</h3> */}
      <h3 className='bg-white p-1 rounded-lg shadow-xl w-3/12 text-center mx-1 my-1'> #{pokemonObj.id}</h3>
     </div>
     <img width="200px" className='mx-auto bg-white rounded-full' src={pokemonObj?.sprites.other.home.front_default} alt="img" />
     <h3 className=" bg-white rounded-lg shadow-lg p-1 w-8/12 mx-auto my-1 text-center">{pokemonObj.name}</h3>
     <div className="info m-1 h-40 bg-white p-3 sm:w-auto rounded-lg">
      <h3 className='p-2'>Tipo: {type}</h3>
      <hr />
      <h3 className='p-2'>Ataque: {pokemonObj.moves[0].move.name}</h3>
      <hr />
      <h3 className='p-2'>Peso: {pokemonObj.weight} Lbs</h3>

     </div>
    </div>
   </>

  )
}
