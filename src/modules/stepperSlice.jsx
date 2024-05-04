import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValues: {
    fromCity: "",
    toCity: "",
  },
};

export const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    handleOnChangeFromCity: (state, action) => {
      state.formValues.fromCity = action.payload;
    },

    handleOnChangeToCity: (state, action) => {
      state.formValues.toCity = action.payload;
    },
  },
});

export const { handleOnChangeFromCity, handleOnChangeToCity } =
  stepperSlice.actions;
export default stepperSlice.reducer;
