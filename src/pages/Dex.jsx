import { useState } from "react";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import Dashboard from "../components/Dashboard";
import { POKEMON, PokeState } from "../context/Pokemon";

const Dex = () => {
  const pokeData = MOCK_DATA;
  const [poke, setPoke] = useState([]);
  return (
    <div>
      <POKEMON.Provider value={pokeData}>
        <PokeState.Provider value={{ poke, setPoke }}>
          <Dashboard />

          <PokemonList />
        </PokeState.Provider>
      </POKEMON.Provider>
    </div>
  );
};

export default Dex;
