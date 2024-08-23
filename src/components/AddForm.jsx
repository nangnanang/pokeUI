import React from "react";
import AddCard from "./AddCard";
import styled from "styled-components";

const Form = ({ data }) => {
  if (data) {
    return <AddCard data={data} />;
  } else {
    return (
      <BlankImageDiv>
        <BlankImg
          className="addImage"
          src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png"
        />
      </BlankImageDiv>
    );
  }
};

const AddForm = React.memo(Form);

export default AddForm;

const BlankImageDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: aliceblue;
  border: 2px dashed gray;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const BlankImg = styled.img`
  width: 50px;
  height: 50px;
`;
