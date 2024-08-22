import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardButton, CardDiv } from "./PokemonCard";
import { PokemonContext } from "../context/Pokemon.jsx";

const AddCard = ({ data }) => {
  const deleteBtn = useContext(PokemonContext).deleteBtn;

  const navigate = useNavigate();

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
      <CardButton value={data.id} onClick={(event) => deleteBtn(event)}>
        삭제
      </CardButton>
    </CardDiv>
  );
};

export default AddCard;
