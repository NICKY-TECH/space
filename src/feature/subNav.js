import { createSlice } from "@reduxjs/toolkit";

export const subNavSlice = createSlice({
  name: "subNav",
  initialState: { value: localStorage.getItem("sub") },
  reducers: {
    subNavState: (state, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default subNavSlice.reducer;
export const { subNavState } = subNavSlice.actions;
