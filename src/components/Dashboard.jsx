import React from "react";
import AddForm from "./AddForm";
import styled from "styled-components";

const Dashboard = ({ poke, setPoke }) => {
  return (
    <Head>
      <div>
        <HeadTitle>나만의 포켓몬</HeadTitle>

        <AddDiv>
          <AddForm data={poke[0]} poke={poke} setPoke={setPoke} />
          <AddForm data={poke[1]} poke={poke} setPoke={setPoke} />
          <AddForm data={poke[2]} poke={poke} setPoke={setPoke} />
          <AddForm data={poke[3]} poke={poke} setPoke={setPoke} />
          <AddForm data={poke[4]} poke={poke} setPoke={setPoke} />
          <AddForm data={poke[5]} poke={poke} setPoke={setPoke} />
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
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;
