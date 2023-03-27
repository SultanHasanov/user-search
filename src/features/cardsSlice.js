import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getRepozitories = createAsyncThunk(
  "cards/getRepozitories",
  async (userName) => {
    const str = userName || "subject ";
    const { data } = await axios.get(
      `https://api.github.com/search/repositories?q=${str}`
    );

    return data.items;
  }
);

const initialState = {
  repositories: [],
};

const cardsSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    removeCard: (state, action) => {
      state.repositories = state.repositories.filter(
        (el) => el.id !== action.payload
      );
    },
  },
  extraReducers: {
    [getRepozitories.fulfilled]: (state, action) => {
      state.repositories = action.payload;
    },
  },
});

export const { removeCard } = cardsSlice.actions;
export default cardsSlice.reducer;
