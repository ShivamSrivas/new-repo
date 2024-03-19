import { configureStore, combineReducers } from "@reduxjs/toolkit";
import landingPageSliceReducer from "../Features/LandingPageSlice";
import LandingCardSliceReducer from "../Features/LandingCardSlice";
import PromptSlice from "../Features/PromptSlice";

export const store = configureStore({
  reducer: combineReducers({
    landingPage: landingPageSliceReducer,
    landingCard: LandingCardSliceReducer,
    promptBox: PromptSlice,
  }),
});
