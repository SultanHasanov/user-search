import { configureStore } from "@reduxjs/toolkit";
import card from "../features/cardsSlice";

export const store = configureStore({
  reducer: {
    card
  },
}); 
