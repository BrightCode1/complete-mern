import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isSearchModalOpen: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    sideBar: (state, action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    searchBar: (state, action) => {
      state.isSearchModalOpen = !state.isSearchModalOpen;
    },
  },
});

export const { sideBar, searchBar } = navSlice.actions;
export default navSlice.reducer;
