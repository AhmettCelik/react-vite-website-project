import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FormElement = ({ formElementContent }) => {
  return (
    <div className="input-group relative">
      <input
        id="zip"
        type="text"
        className="input p-2 h-10 w-full outline-none border-[0.1rem] rounded border-solid border-slate-400 opacity-65 focus:border-[#b3002d] focus:border-2"
      />
      <label
        htmlFor="zip"
        className="placeholder px-2 absolute top-[0.5rem] left-1 text-md font-normal duration-[0.3s] pointer-events-none bg-white text-slate-400 opacity-100"
      >
        {formElementContent}
      </label>
    </div>
  );
};

const StepperStepCircles = ({ formStepContent }) => {
  const [bgColor, setBgColor] = useState("#ededed");

  return (
    <div className={`bg-[${bgColor}] w-8 h-full rounded-full flex ft-center`}>
      <p className="font-normal text-slate-400">{formStepContent}</p>
    </div>
  );
};

const StepperStep = ({}) => {
  return (
    <div className="w-full h-8 flex justify-center items-center">
      <StepperStepCircles formStepContent="1" />
      <div className="bg-slate-200 h-1 w-12"></div>
      <StepperStepCircles formStepContent="2" />
      <div className="bg-slate-200 h-1 w-12"></div>
      <StepperStepCircles formStepContent="3" />
      <div className="bg-slate-200 h-1 w-12"></div>
      <StepperStepCircles formStepContent="4" />
      <div className="bg-slate-200 h-1 w-12"></div>
      <StepperStepCircles formStepContent="5" />
    </div>
  );
};

const StepperContinueBtn = ({ widthOfContinue }) => {
  return (
    <button
      className={`bg-green-500 hover:bg-green-400 ${widthOfContinue} h-10 rounded text-white font-normal`}
    >
      Continue
      <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "0.5rem" }} />
    </button>
  );
};

const StepperFirstStep = () => {
  return (
    <div className="w-full h-full flex flex-col justify-evenly text-center items-center">
      <p className="font-normal text-[0.95rem]">
        Get an <strong>instant</strong> & <strong>free quote</strong> or call
        (888) 491-7162
      </p>
      <StepperStep />
      <form className="form w-10/12 flex flex-col gap-4">
        <FormElement formElementContent="From (ZIP or City)" />
        <FormElement formElementContent="To (ZIP or City)" />
      </form>

      <StepperContinueBtn widthOfContinue="w-10/12" />

      <p className="font-normal text-sm w-11/12">
        No credit card required! Schedule and save money now.
      </p>
    </div>
  );
};

const Stepper = () => {
  return <StepperFirstStep />;
};

export default Stepper;
