import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = location.search.slice(4);

  const pokeData = MOCK_DATA;
  const pokemon = pokeData[queryString - 1];

  return (
    <div>
      <Img src={pokemon.img_url} alt={pokemon.korean_name} />
      <div>
        <h1>{pokemon.korean_name}</h1>
        <P>타입 : {pokemon.types.join(", ")}</P>
        <P>{pokemon.description}</P>
      </div>
      <Button
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </Button>
    </div>
  );
};

export default PokemonDetail;

const Img = styled.img`
  width: 300px;
`;

const P = styled.p`
  font-size: 18px;
`;

const Button = styled.button`
  width: 120px;
  height: 60px;
  font-size: 20px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: #e7e7e7;
  &:hover {
    background-color: #bab9b9;
  }
`;
