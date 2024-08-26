import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { addBtn } from "../redux/slices/pokemonSlice";
import { useDispatch } from "react-redux";
import React from "react";

const ListCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <CardDiv
      onClick={() => {
        navigate(`/pokemon-detail?id=${pokemon.id}`);
      }}
    >
      <div>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <div>
          <p>{pokemon.korean_name}</p>
          <p>No. {pokemon.id}</p>
        </div>
        <CardButton
          value={pokemon.id}
          onClick={(event) => {
            event.stopPropagation();
            dispatch(addBtn(pokemon));
          }}
        >
          추가
        </CardButton>
      </div>
    </CardDiv>
  );
};

const PokemonCard = React.memo(ListCard);

export default PokemonCard;

export const CardDiv = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    background-color: #dadada;
  }
`;

export const CardButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 5px;
  &:hover {
    background-color: rgb(193, 0, 0);
  }
`;
