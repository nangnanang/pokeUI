import AddForm from "./AddForm";
import styled from "styled-components";

import { useSelector } from "react-redux";

const Dashboard = () => {
  const poke = useSelector((state) => state.pokemon);
  const indexArr = [0, 1, 2, 3, 4, 5];
  return (
    <Head>
      <div>
        <HeadTitle>나만의 포켓몬</HeadTitle>

        <AddDiv>
          {indexArr.map((i) => {
            return <AddForm key={i} data={poke[i]} />;
          })}
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
