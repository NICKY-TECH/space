import { createSlice } from "@reduxjs/toolkit";

export const selectCrewSlice = createSlice({
  name: "selectCrew",
  initialState: { value: 0 },
  reducers: {
    selectCrewState: (state,action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default selectCrewSlice .reducer;
export const { selectCrewState } = selectCrewSlice.actions;