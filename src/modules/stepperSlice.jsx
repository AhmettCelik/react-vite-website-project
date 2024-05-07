import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValues: {
    fromCity: "",
    toCity: "",
    selectedBrand: "",
    selectedModel: "",
    selectedCarYear: "",
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

    handleBrandChange: (state, action) => {
      state.formValues.selectedBrand = action.payload;
    },

    handleModelValueChange: (state, action) => {
      state.formValues.selectedModel = action.payload;
    },

    handleSelectedCarYearValue: (state, action) => {
      state.formValues.selectedCarYear = action.payload;
    },
  },
});

export const {
  handleOnChangeFromCity,
  handleOnChangeToCity,
  handleBrandChange,
  handleModelValueChange,
  handleSelectedCarYearValue,
} = stepperSlice.actions;
export default stepperSlice.reducer;
