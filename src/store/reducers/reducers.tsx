import { combineReducers } from "redux";
import myReducer from "../mySlice"; // Import your slice

const rootReducer = combineReducers({
  myReducer, // Add your reducer here
});

export type RootState = ReturnType<typeof rootReducer>;
