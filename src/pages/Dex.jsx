import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import { PokemonProvider } from "../context/Pokemon.jsx";

const Dex = () => {
  return (
    <div>
      <PokemonProvider>
        <Dashboard />

        <PokemonList />
      </PokemonProvider>
    </div>
  );
};

export default Dex;
