import React, { useEffect, useState } from "react";
import "../App.css";
export const PokeApi = () => {
  /* Busqueda Pokemon */
  const [pokemon, setPokemon] = useState("");
  const [obtenerPokemon, setObtenerPokemon] = useState("");
  const [nombrePokemonCard, setNombrePokemonCard] = useState("");
  const [imagePokemonCard, setImagePokemonCard] = useState("");
  const [typeCSS, setTypeCSS] = useState("");
  const [activarCard, setActivarCard] = useState(Boolean);

  useEffect(() => {
    const buscarPokemon = async () => {
      try {
        const API = `https://pokeapi.co/api/v2/pokemon/${obtenerPokemon}`;
        const res = await fetch(API);
        const data = await res.json();

        setNombrePokemonCard(data.forms[0].name);
        setImagePokemonCard(
          data.sprites.other["official-artwork"].front_default
        );
        setTypeCSS(data.types[0].type.name);

        setActivarCard(false);
      } catch (error) {
        console.log(error);
      }
    };
    buscarPokemon();
  }, [obtenerPokemon]);

  const handleAddPokemon = (e) => {
    e.preventDefault();
    setObtenerPokemon(pokemon);
  };

  const handleValuePokemon = (e) => {
    setPokemon(e.target.value);
  };

  return (
    <>
      <div>
        <h1>Busqueda Pokemon</h1>
      </div>
      <form onSubmit={handleAddPokemon}>
        <input type="text" onChange={handleValuePokemon} /> <br />
        <br />
        <button type="submit">Buscar</button>
      </form>

      <div className="card-pokemon">
        <div className={typeCSS}>
          <h2>{nombrePokemonCard}</h2>
          <img src={imagePokemonCard}></img>
        </div>
      </div>
    </>
  );
};
