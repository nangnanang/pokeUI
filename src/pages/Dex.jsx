import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import Dashboard from "../components/Dashboard";

const Dex = () => {
  const pokeData = MOCK_DATA;
  const [poke, setPoke] = useState([]);
  return (
    <div>
      <Dashboard poke={poke} setPoke={setPoke} />

      <PokemonList pokeData={pokeData} poke={poke} setPoke={setPoke} />
    </div>
  );
};

export default Dex;
