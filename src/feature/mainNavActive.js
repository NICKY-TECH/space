import { createSlice } from "@reduxjs/toolkit";

export const mainNavSlice = createSlice({
  name: "smainNav",
  initialState: { value: localStorage.getItem("main") },
  reducers: {
    mainNavState: (state,action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default mainNavSlice.reducer;
export const {mainNavState } = mainNavSlice.actions;