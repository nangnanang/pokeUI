import { createContext } from "react";
import { useState } from "react";
import MOCK_DATA from "../mock";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const pokeData = MOCK_DATA;
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addBtn = (event) => {
    event.stopPropagation();
    let sameId = false;
    for (const list of selectedPokemon) {
      if (list.id === Number(event.target.value)) {
        sameId = true;
        break;
      }
    }
    if (sameId) {
      alert("이미 추가한 포케몬입니다");
      return;
    }
    if (selectedPokemon.length < 6) {
      setSelectedPokemon([
        ...selectedPokemon,
        pokeData[Number(event.target.value) - 1],
      ]);
    } else {
      alert("더 이상 추가할 수 없습니다");
    }
  };

  const deleteBtn = (event) => {
    event.stopPropagation();

    const deleteData = selectedPokemon.filter((list) => {
      return !(list.id === Number(event.target.value));
    });
    setSelectedPokemon(deleteData);
  };
  return (
    <PokemonContext.Provider
      value={{ pokeData, selectedPokemon, addBtn, deleteBtn }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
