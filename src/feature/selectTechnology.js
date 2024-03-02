import { createSlice } from "@reduxjs/toolkit";

export const selectTechSlice = createSlice({
  name: "selecTech",
  initialState: { value: 1 },
  reducers: {
    selectTechState: (state,action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default selectTechSlice.reducer;
export const { selectTechState } = selectTechSlice.actions;