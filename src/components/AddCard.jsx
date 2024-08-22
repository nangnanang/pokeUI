import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardButton, CardDiv } from "./PokemonCard";
import { PokeState } from "../context/Pokemon";

const AddCard = ({ data }) => {
  const poke = useContext(PokeState).poke;
  const setPoke = useContext(PokeState).setPoke;

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
