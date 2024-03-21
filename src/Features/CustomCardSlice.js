import { createSlice } from "@reduxjs/toolkit";
import  {InitialStateCustomCard}  from "./InitialState/CustomCard";

export const customCardSlice = createSlice({
  name: "customCard",
  initialState: InitialStateCustomCard,
  reducers: {
    toggleDrawer: (state, action) => {
      state.drawerOpen = !state.drawerOpen;
    },
    themeChanger: (state, action) => {
      return {
        ...state,
        theme: state.theme === "Dark" ? "Light" : "Dark",
      };
    },
  },
});

export const { toggleDrawer, themeChanger } = customCardSlice.actions;
export default customCardSlice.reducer;
