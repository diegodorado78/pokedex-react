import React from "react";
import "./styles.scss";
export default function Pokemon({ pokemonObj }) {
  const type = pokemonObj.types[0].type.name;

  return (
    <>
      <div
        className={`flex flex-col ${type} m-1 content-center rounded-lg sm:mx-auto border-2 border-black shadow-xl `}
      >
        <div className="flex justify-end w-full">
          <h3 className="bg-white p-1 rounded-lg shadow-xl w-auto text-center mx-1 my-1">
            #{pokemonObj.id}
          </h3>
        </div>
        <img
          width="200px"
          className="mx-auto bg-white rounded-full"
          src={pokemonObj?.sprites.other.home.front_default}
          alt="img"
        />
        <h3 className=" bg-white rounded-lg shadow-lg p-1 mx-auto my-1 text-center">
          {pokemonObj.name}
        </h3>
        <div className="info h-36 bg-white p-1 sm:w-auto rounded-lg">
          <h3 className=" p-2 sm:p-0  lg:p-2">Tipo: {type}</h3>
          <hr />
          <h3 className="p-2 sm:p-0 lg:p-2">
            Ataque: {pokemonObj.moves[0].move.name}
          </h3>
          <hr />
          <h3 className=" p-2 sm:p-0  lg:p-2">Peso: {pokemonObj.weight} Lbs</h3>
          <hr />
        </div>
      </div>
    </>
  );
}
