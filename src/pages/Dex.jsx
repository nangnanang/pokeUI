import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import { Toaster } from "sonner";

const Dex = () => {
  return (
    <div>
      <Toaster richColors position="top-center" />
      <Dashboard />

      <PokemonList />
    </div>
  );
};

export default Dex;
