import { createSlice } from "@reduxjs/toolkit";
import  {InitialPropmtState}  from "./InitialState/PromptBox";

export const PromptBoxSlice = createSlice({
  name: "promptBox",
  initialState: InitialPropmtState,
  reducers: {
    onValueChange: (state, action) => {
      state.Value = action.payload
    }
  },
});

export const { onValueChange } = PromptBoxSlice.actions;
export default PromptBoxSlice.reducer;
