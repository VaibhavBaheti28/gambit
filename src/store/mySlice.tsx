import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type of your state
interface MyState {
  myString: string;
  theme: string;
}

const initialState: MyState = {
  myString: "Explorer",
  theme: "dark",
};

const mySlice = createSlice({
  name: "mySlice",
  initialState,
  reducers: {
    updateString: (state, action: PayloadAction<string>) => {
      state.myString = action.payload;
    },
    updateTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { updateString, updateTheme } = mySlice.actions;
export default mySlice.reducer;
