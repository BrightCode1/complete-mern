import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import navReducer from "../features/nav/navSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
  },
});
