import { createSlice } from "@reduxjs/toolkit";

export const overLaySlice = createSlice({
  name: "selectCrew",
  initialState: { value: false },
  reducers: {
    overLayState: (state) => {
      return {
        ...state,
        value: !state.value,
      };
    },
  },
});

export default overLaySlice.reducer;
export const {overLayState } = overLaySlice.actions;