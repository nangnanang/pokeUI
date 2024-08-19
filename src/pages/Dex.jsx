import React from "react";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  return (
    <div>
      <div className="head">
        <h1 className="headTitle">나만의 포켓몬</h1>
        <div className="addForm">
          <div className="addImageDiv">
            <img className="addImage" src="../../public/pokeball-icon.png" />
          </div>
        </div>
      </div>

      <PokemonList />
    </div>
  );
};

export default Dex;
