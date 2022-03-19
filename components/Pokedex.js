import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import SelectedPokemon from "./SelectedPokemon";
import Searchbar from "../components/Searchbar";

const Pokedex = (props) => {
  const {
    pokemons,
    page,
    setPage,
    total,
    loading,
    selectPokemon,
    selectedPokemon,
    fetchPokemon
  } = props;
  // const pokemons = props.pokemons;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };
  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };
  return (
    <div>
      <div className="header"></div>
      <div className="pokedex-content">
        <div className="pokedex-content-reduced">
          <div className="top-rect"></div>
          <div className="top-triangle"></div>
          <div className="top-square"></div>
          <div className="sensor">
            <div className="sensor-inner">
              <div className="sensor-blur"></div>
            </div>
          </div>
          <div className="lights-container">
            <div className="light red">
              <div className="light-blur"></div>
            </div>
            <div className="light yellow">
              <div className="light-blur"></div>
            </div>
            <div className="light green">
              <div className="light-blur"></div>
            </div>
          </div>
          <div className="pokedex-cover top"></div>
          {selectedPokemon.length > 0 ? (
            selectedPokemon.map((s_pokemon, idx) => {
              return <SelectedPokemon selectedPokemon={s_pokemon} />;
            })
          ) : (
            <div className="selectedPokemon"></div>
          )}
          <div className="pokedex-grid-container">
            {loading ? (
              <div className="loading">
                <div className="spin"></div>
              </div>
            ) : (
              <div className="pokedex-grid">
                {pokemons.map((pokemon, idx) => {
                  return (
                    <Pokemon
                      pokemon={pokemon}
                      selectPokemon={selectPokemon}
                      key={pokemon.name}
                    />
                  );
                })}
              </div>
            )}
          </div>
          <div className="pokedex-cover bot">
            <Searchbar selectPokemon={selectPokemon} />
            <Pagination
              page={page + 1}
              totalPages={total}
              onLeftClick={lastPage}
              onRightClick={nextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
