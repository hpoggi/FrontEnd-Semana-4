import React from "react";
import { searchPokemon } from "../api";
const { useState } = React;

const Searchbar = (props) => {
  const { selectPokemon } = props;
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = (e) => {
    const pokemonName = document.getElementsByClassName("led")[0].value;
    selectPokemon(pokemonName.toLowerCase());
  };

  return (
    <div className="searchbar-container">
      <input
        className="led"
        onChange={onChange}
        placeholder="Nombre de pokemon"
      />
      <button className="search" onClick={onClick}>
        <img src="https://ramptshirts.com/assets/vendor/font-awesome/js-packages/@fortawesome/fontawesome-free/svgs/solid/magnifying-glass.svg" />
      </button>
    </div>
  );
};

export default Searchbar;
