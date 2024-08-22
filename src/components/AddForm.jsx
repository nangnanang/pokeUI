import React from "react";
import AddCard from "./AddCard";
import styled from "styled-components";

const AddForm = ({ data }) => {
  if (data) {
    return <AddCard data={data} />;
  } else {
    return (
      <BlankImageDiv>
        <BlankImg className="addImage" src="../../public/pokeball-icon.png" />
      </BlankImageDiv>
    );
  }
};

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
