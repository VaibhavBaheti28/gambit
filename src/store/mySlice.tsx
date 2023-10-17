import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type of your state
interface MyState {
  myString: string;
}

const initialState: MyState = {
  myString: "Explorer",
};

const mySlice = createSlice({
  name: "mySlice",
  initialState,
  reducers: {
    updateString: (state, action: PayloadAction<string>) => {
      state.myString = action.payload;
    },
  },
});

export const { updateString } = mySlice.actions;
export default mySlice.reducer;
