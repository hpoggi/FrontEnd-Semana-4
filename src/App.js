import React from "react";
import "./styles.css";
import Navbar from "../components/Navbar";

import Pokedex from "../components/Pokedex";
import { getPokemonData, getPokemons, searchPokemon } from "../api";

const { useState, useEffect } = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(10, 10 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      // console.log("results");
      // console.log(results);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 10));
    } catch (err) {}
  };

  const fetchPokemon = async (name) => {
    try {
      setLoading(true);
      const res = await searchPokemon(name);
      console.log(res);

      setSelectedPokemon(res);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const selectPokemon = async (pokemonName) => {
    try {
      const data = await searchPokemon(pokemonName);
      console.log(data);
      setSelectedPokemon([data]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="App">
        <div className="spacer"></div>
        {/* <Searchbar /> */}

        <Pokedex
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
          selectPokemon={selectPokemon}
          selectedPokemon={selectedPokemon}
          fetchPokemon={fetchPokemon}
        />
      </div>
    </div>
  );
}
