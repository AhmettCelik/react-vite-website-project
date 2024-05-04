import { configureStore } from "@reduxjs/toolkit";
import stepperSlice from "../modules/stepperSlice";

export const store = configureStore({
  reducer: {
    stepper: stepperSlice,
  },
});
