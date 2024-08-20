import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CardButton, CardDiv } from "./PokemonCard";

const AddCard = ({ data, poke, setPoke }) => {
  const navigate = useNavigate();
  const deleteData = poke.filter((list) => {
    return !(list.id === data.id);
  });
  const deleteBtn = (event) => {
    event.stopPropagation();
    setPoke(deleteData);
  };

  return (
    <CardDiv
      onClick={() => {
        navigate(`/pokemon-detail?id=${data.id}`);
      }}
    >
      <img src={data.img_url} alt={data.korean_name} />
      <div>
        <p>{data.korean_name}</p>
        <p>No. {data.id}</p>
      </div>
      <CardButton onClick={deleteBtn}>삭제</CardButton>
    </CardDiv>
  );
};

export default AddCard;
