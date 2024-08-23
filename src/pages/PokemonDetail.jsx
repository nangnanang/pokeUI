import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock";
import { useDispatch, useSelector } from "react-redux";
import { addBtn } from "../redux/slices/pokemonSlice";
import { Toaster } from "sonner";

const PokemonDetail = () => {
  const select = useSelector((state) => state.pokemon);
  return (
    <div>
      <Toaster richColors position="top-center" />
      <h4>등록된 포케몬</h4>
      {select.map((state) => {
        return (
          <img key={state.id} src={state.img_url} alt={state.korean_name} />
        );
      })}
      <DetailCard />
    </div>
  );
};

export default PokemonDetail;

const DetailCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = location.search.slice(4);

  const pokeData = MOCK_DATA;
  const pokemon = pokeData[queryString - 1];

  const dispatch = useDispatch();

  // const state = useSelector((state) => state).pokemon;
  // console.log(state);
  // useEffect(() => {
  //   // alert("추가되었습니다");
  // }, [state]);

  return (
    <div>
      <Img src={pokemon.img_url} alt={pokemon.korean_name} />
      <div>
        <h1>{pokemon.korean_name}</h1>
        <P>타입 : {pokemon.types.join(", ")}</P>
        <P>{pokemon.description}</P>
      </div>
      <Col>
        <GrayButton
          onClick={() => {
            navigate("/dex");
          }}
        >
          뒤로가기
        </GrayButton>
        <RedButton
          onClick={() => {
            dispatch(addBtn(pokemon));
          }}
        >
          추가
        </RedButton>
      </Col>
    </div>
  );
};

const Img = styled.img`
  width: 250px;
`;

const P = styled.p`
  font-size: 18px;
`;

const GrayButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 10px;
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

const RedButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 10px;
  font-size: 20px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  &:hover {
    background-color: rgb(193, 0, 0);
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
