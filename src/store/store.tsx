import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./mySlice"; // Import your slice

const store = configureStore({
  reducer: {
    myReducer, // Add your reducer here
  },
});

export default store;
