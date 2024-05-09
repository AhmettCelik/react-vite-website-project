import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValues: {
    fromCity: "",
    toCity: "",
    selectedBrand: "",
    selectedModel: "",
    selectedCarYear: "",
    transportType: "",
    condition: "",
    email: "",
    shippingDate: "",
    date: "",
  },

  stepperStyleClasses: {
    styleOfFirstSelectOfThirdStep: "pointer-events-none opacity-40",
    styleOfSecondSelectOfThirdStep: "pointer-events-none opacity-40",
    styleOfCustomDateOfFifthStep: "pointer-events-none opacity-40",
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

    handleFirstBtnOfSecondStepClick: (state, action) => {
      state.formValues.transportType = action.payload;
      console.log(state.formValues.transportType);
    },

    handleButtonsOfFourthStep: (state, action) => {
      state.formValues.condition = action.payload;
    },

    assignShipmentDate: (state, action) => {
      state.formValues.shippingDate = action.payload;
      console.log(state.formValues.shippingDate);
      if (state.formValues.shippingDate === "Custom") {
        state.stepperStyleClasses.styleOfCustomDateOfFifthStep = "";
      } else
        state.stepperStyleClasses.styleOfCustomDateOfFifthStep =
          "pointer-events-none opacity-40";
    },

    handleDateChange: (state, action) => {
      state.formValues.date = action.payload;
    },

    handleEmailChange: (state, action) => {
      state.formValues.email = action.payload;
      console.log(state.formValues.email);
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
  handleFirstBtnOfSecondStepClick,
  handleButtonsOfFourthStep,
  assignShipmentDate,
  handleDateChange,
  handleEmailChange,
} = stepperSlice.actions;
export default stepperSlice.reducer;
