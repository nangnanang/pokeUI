import { useContext } from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { PokemonContext } from "../context/Pokemon.jsx";

const PokemonList = () => {
  const pokeData = useContext(PokemonContext).pokeData;
  return (
    <ListDiv>
      {pokeData.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </ListDiv>
  );
};

export default PokemonList;

const ListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: antiquewhite;
  padding: 20px;
  margin: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;
