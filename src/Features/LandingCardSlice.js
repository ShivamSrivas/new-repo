import { createSlice } from "@reduxjs/toolkit";
import  {InitialStateLandingCard}  from "./InitialState/LandingCard";

export const landingCardSlice = createSlice({
  name: "landingCard",
  initialState: InitialStateLandingCard,
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

export const { toggleDrawer, themeChanger } = landingCardSlice.actions;
export default landingCardSlice.reducer;
