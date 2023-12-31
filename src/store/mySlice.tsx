import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type of your state
interface MyState {
  myString: string;
  theme: string;
  isLocked: boolean;
}

const initialState: MyState = {
  myString: "Explorer",
  theme: "dark",
  isLocked: true,
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
    updateLock: (state, action: PayloadAction<boolean>) => {
      state.isLocked = action.payload;
    },
  },
});

export const { updateString, updateTheme, updateLock } = mySlice.actions;
export default mySlice.reducer;
