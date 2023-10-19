export const UPDATE_STRING = "UPDATE_STRING";

// Action creator to update the string
export const updateString = (newString: string) => ({
  type: UPDATE_STRING,
  payload: newString,
});
