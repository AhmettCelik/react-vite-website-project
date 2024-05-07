import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValues: {
    fromCity: "",
    toCity: "",
    selectedBrand: "",
    selectedModel: "",
    selectedCarYear: "",
  },

  stepperStyleClasses: {
    styleOfFirstSelectOfThirdStep: "pointer-events-none opacity-40",
    styleOfSecondSelectOfThirdStep: "pointer-events-none opacity-40",
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

    manageFirstSelectElementOfThirdStepStyle: (state) => {
      if (state.formValues.selectedCarYear == "Year") {
        state.stepperStyleClasses.styleOfFirstSelectOfThirdStep =
          "pointer-events-none opacity-40";
      } else state.stepperStyleClasses.styleOfFirstSelectOfThirdStep = "";
    },

    manageSecondSelectElementOfThirdStepStyle: (state) => {
      if (state.formValues.selectedBrand === "Make") {
        state.stepperStyleClasses.styleOfSecondSelectOfThirdStep =
          "pointer-events-none opacity-40";
      } else state.stepperStyleClasses.styleOfSecondSelectOfThirdStep = "";
    },
  },
});

export const {
  handleOnChangeFromCity,
  handleOnChangeToCity,
  handleBrandChange,
  handleModelValueChange,
  handleSelectedCarYearValue,
  manageFirstSelectElementOfThirdStepStyle,
  manageSecondSelectElementOfThirdStepStyle,
} = stepperSlice.actions;
export default stepperSlice.reducer;
