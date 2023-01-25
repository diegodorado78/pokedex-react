import React, { useEffect, useState } from "react";
import logo from "../../assets/pokedex_logo.png";
import pokemonServices from "../../services/pokemonServices";
import Pokemon from "./pokemon/Pokemon";
import Form from "../form.jsx/Form";
import "./styles.scss";
export default function Home() {
  const [pokemon, setPokemon] = useState(null);
  const [query, setQuery] = useState("ditto");
  useEffect(() => {
    pokemonServices.getPokemon(query).then(onSuccess).catch(console.error);
  }, [query]);

  const onSuccess = (res) => {
    console.log(res);
    setPokemon(res);
  };

  return (
    <>
      <div className=" poke-container flex flex-col p-5 w-full sm:w-8/12 mx-auto bg-transparent justify-between content-center ">
        <div className="flex flex-col sm:flex-row rounded-xl ">
          <img
            src={logo}
            className=" mx-auto my-1 sm:hidden"
            alt="logo"
            width="250px"
          />
          {/* profile__container */}
          <div className="w-full sm:w-5/12 mx-auto mb-4 sm:mb-0 my-auto">
            {pokemon ? (
              <Pokemon pokemonObj={pokemon} />
            ) : (
              <div className="bg-white flex rounded-lg p-10 my-auto">
                <h3 className=" ">
                  Oops :(
                  <br />
                  Pokemon no encontrado,intenta con otro Porfavor...
                </h3>
              </div>
            )}
          </div>

          {/* search__container */}
          <div className="w-full md:w-4/12 mx-auto text-left h-auto grid content-between my-2 sm:my-0">
            <img
              src={logo}
              className=" mr-5 mt-10 hidden sm:block"
              alt="logo"
              width="250px"
            />
            <Form setQuery={setQuery} />
          </div>
        </div>
      </div>
    </>
  );
}
