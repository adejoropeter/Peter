import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  isOpen: boolean | null;
};
const initialState: InitialStateType = {
  isOpen: null,
};
const cartDrawerSlice = createSlice({
  name: "drawer",
  initialState: initialState,
  reducers: {
    closeDrawer: (state) => {
      state.isOpen = false;
    },
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {closeDrawer,toggleDrawer} = cartDrawerSlice.actions;
export default cartDrawerSlice.reducer