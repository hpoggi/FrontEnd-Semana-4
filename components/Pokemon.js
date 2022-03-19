import React from "react";

const Pokemon = (props) => {
  const { pokemon, selectPokemon, key } = props;

  return (
    <div className="pokemon-card" id={pokemon.name}>
      <div
        className="pokemon-img-container"
        onClick={() => selectPokemon(pokemon.name)}
      >
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
        <h3>{pokemon.name}</h3>
      </div>
    </div>
  );
};

export default Pokemon;
