import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = [];

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addBtn: (state, action) => {
      let sameId = false;
      for (const element of state) {
        if (element.id === action.payload.id) {
          sameId = true;
          break;
        }
      }
      if (sameId) {
        toast.warning("이미 추가한 포케몬입니다", {
          toastId: action.payload.id,
        });
        return [...state];
      }
      if (state.length < 6) {
        return [...state, action.payload];
      } else {
        toast.warning("더 이상 추가할 수 없습니다", {
          toastId: action.payload.id,
        });
      }
    },
    deleteBtn: (state, action) => {
      return state.filter((element) => {
        return !(element.id === action.payload.id);
      });
    },
  },
});

export const { addBtn, deleteBtn } = pokemonSlice.actions;
export default pokemonSlice.reducer;
