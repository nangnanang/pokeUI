import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { addBtn, deleteBtn } from "../redux/slices/pokemonSlice";
import { useDispatch } from "react-redux";
import React from "react";

const ListCard = ({ data, cue }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <CardDiv
      onClick={() => {
        navigate(`/pokemon-detail?id=${data.id}`);
      }}
    >
      <div>
        <img src={data.img_url} alt={data.korean_name} />
        <div>
          <p>{data.korean_name}</p>
          <p>No. {data.id}</p>
        </div>
        {cue ? (
          <CardButton
            value={data.id}
            onClick={(event) => {
              event.stopPropagation();
              dispatch(addBtn(data));
            }}
          >
            추가
          </CardButton>
        ) : (
          <CardButton
            value={data.id}
            onClick={(event) => {
              event.stopPropagation();
              dispatch(deleteBtn(data));
            }}
          >
            삭제
          </CardButton>
        )}
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
