import { useNavigate } from "react-router-dom";
import { CardButton, CardDiv } from "./PokemonCard";

import { useDispatch } from "react-redux";
import { deleteBtn } from "../redux/slices/pokemonSlice";

const AddCard = ({ data }) => {
  const dispatch = useDispatch();

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
      <CardButton
        value={data.id}
        onClick={(event) => {
          event.stopPropagation();
          dispatch(deleteBtn(data));
        }}
      >
        삭제
      </CardButton>
    </CardDiv>
  );
};

export default AddCard;
