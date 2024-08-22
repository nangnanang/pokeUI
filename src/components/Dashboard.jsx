import { useContext } from "react";
import AddForm from "./AddForm";
import styled from "styled-components";
import { PokemonContext } from "../context/Pokemon.jsx";

const Dashboard = () => {
  const poke = useContext(PokemonContext).selectedPokemon;
  return (
    <Head>
      <div>
        <HeadTitle>나만의 포켓몬</HeadTitle>

        <AddDiv>
          <AddForm data={poke[0]} />
          <AddForm data={poke[1]} />
          <AddForm data={poke[2]} />
          <AddForm data={poke[3]} />
          <AddForm data={poke[4]} />
          <AddForm data={poke[5]} />
        </AddDiv>
      </div>
    </Head>
  );
};

export default Dashboard;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: antiquewhite;
  margin: 20px;
  border-radius: 10px;
`;

const HeadTitle = styled.h1`
  margin: 20px;
`;

const AddDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 150px));
  gap: 20px;
  width: 100%;
  justify-items: center;
`;
