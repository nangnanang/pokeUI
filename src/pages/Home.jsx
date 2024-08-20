import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeDiv>
      <Img src="../../public/pokemon-logo.png" alt="Pokemon Logo" />
      <Button
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </Button>
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;
`;

const Img = styled.img`
  width: 1000px;
`;

const Button = styled.button`
  width: 250px;
  height: 50px;
  font-size: 20px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 5px;
`;
