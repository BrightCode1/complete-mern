import { createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userLocalStorageData = JSON.parse(localStorage.getItem("user"));

const initialState = {
  userInfo: userLocalStorageData ? userLocalStorageData : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.userInfo = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authService.register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(authService.register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = action.payload.success;
        state.message = action.payload.message;
        state.userInfo = action.payload.data;
      })
      .addCase(authService.register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(authService.loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(authService.loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = action.payload.success;
        state.message = action.payload.message;
        state.userInfo = action.payload.data;
      })
      .addCase(authService.loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
