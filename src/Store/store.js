import { configureStore, combineReducers } from "@reduxjs/toolkit";
import landingPageSliceReducer from "../Features/LandingPageSlice";
import LandingCardSliceReducer from "../Features/LandingCardSlice";
import PromptSlice from "../Features/PromptSlice";
import CustomCardSlice from "../Features/CustomCardSlice";

export const store = configureStore({
  reducer: combineReducers({
    landingPage: landingPageSliceReducer,
    landingCard: LandingCardSliceReducer,
    promptBox: PromptSlice,
    customCard:CustomCardSlice

  }),
});
