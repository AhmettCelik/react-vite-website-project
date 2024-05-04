import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  handleOnChangeFromCity,
  handleOnChangeToCity,
} from "../modules/stepperSlice";

const FormElementButtons = ({ content }) => {
  return (
    <div>
      <button className="p-2 h-10 w-full outline-none border-[0.1rem] rounded-lg border-solid border-[#b3002d] focus:bg-[#b3002d] focus:text-white duration-[0.2s]">
        {content}
      </button>
    </div>
  );
};

const YearOptions = () => {
  const options = [];
  for (let year = 2024; year >= 1896; year--) {
    options.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  return (
    <select className="p-2 h-10 w-full outline-none rounded-lg duration-[0.2s] focus:border-2 focus:border-solid focus:border-[#b3002d] font-normal text-sm text-slate-500">
      <option value="">Year</option>
      {options}
    </select>
  );
};

const StepperStep = ({
  display,
  backgroundColor,
  textColor,
  lineColor,
  content,
}) => {
  return (
    <section className="flex ft-center">
      <div
        className={`bg-${backgroundColor} w-7 h-7 tablet:w-5 tablet:h-5 rounded-full flex ft-center cursor-pointer`}
      >
        <p className={`font-normal text-${textColor}`}>{content}</p>
      </div>
      <div className={`bg-${lineColor} h-1 w-9 ${display}`}></div>
    </section>
  );
};

const StepperContinueBtn = ({ widthOfContinue, onClickFunctionProp }) => {
  return (
    <button
      onClick={onClickFunctionProp}
      className={`bg-green-500 hover:bg-green-400 ${widthOfContinue} h-10 rounded-lg text-white font-normal`}
    >
      Continue
      <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "0.5rem" }} />
    </button>
  );
};

const StepperBackBtn = ({ display, onClickFunctionProp }) => {
  return (
    <button
      onClick={onClickFunctionProp}
      className={`${display} w-5/12 border-2 border-solid rounded-lg border-slate-600 h-10 text-lg font-[700]`}
    >
      Back
    </button>
  );
};

const SubSection = (props) => {
  return (
    <div className={`w-full flex ft-center h-3/12 mb-4 ${props.display}`}>
      <p className="font-normal text-center text-sm tablet:text-[0.8rem] w-11/12">
        {props.paragraphContent}
        <a className={`${props.firstAnchorStyle}`} href={props.firstHref}>
          {props.anchorContent}
        </a>
        {props.paragraphContent_2}
        <a className={`underline text-blue-500`} href={props.secondHref}>
          {props.anchorContent_2}
        </a>
      </p>
    </div>
  );
};

const Step_1 = ({ display }) => {
  const dispatch = useDispatch();
  const fromCityValue = useSelector(
    (store) => store.stepper.formValues.fromCity
  );
  const toCityValue = useSelector((store) => store.stepper.formValues.toCity);

  const handleChangeFromCity = (e) => {
    dispatch(handleOnChangeFromCity(e.target.value));
  };

  const handleChangeToCity = (e) => {
    dispatch(handleOnChangeToCity(e.target.value));
  };
  console.log(fromCityValue);
  console.log(toCityValue);
  return (
    <div
      className={`w-full basis-7/12 flex flex-col justify-evenly text-center items-center ${display}`}
    >
      <p className="font-normal text-[0.95rem] mt-4 tablet:mt-2">
        Get an <strong>instant</strong> & <strong>free quote</strong> or call
        (888) 491-7162
      </p>

      <div className="form w-10/12 mt-2 flex flex-col gap-4">
        <div className="input-group relative">
          <input
            value={fromCityValue}
            onChange={handleChangeFromCity}
            id="zip"
            type="text"
            className="input p-2 h-10 w-full outline-none border-[0.1rem] rounded border-solid border-slate-400 opacity-65 focus:border-[#b3002d] focus:border-2"
          />
          <label
            htmlFor="zip"
            className="placeholder px-2 absolute top-[0.5rem] left-1 text-md font-normal duration-[0.3s] pointer-events-none bg-white text-slate-400 opacity-100"
          >
            From (ZIP or City)
          </label>
        </div>
        <div className="input-group relative">
          <input
            value={toCityValue}
            onChange={handleChangeToCity}
            id="zip"
            type="text"
            className="input p-2 h-10 w-full outline-none border-[0.1rem] rounded border-solid border-slate-400 opacity-65 focus:border-[#b3002d] focus:border-2"
          />
          <label
            htmlFor="zip"
            className="placeholder px-2 absolute top-[0.5rem] left-1 text-md font-normal duration-[0.3s] pointer-events-none bg-white text-slate-400 opacity-100"
          >
            To (ZIP or City)
          </label>
        </div>
      </div>
    </div>
  );
};

const Step_2 = ({ display, count, increment, decrement }) => {
  return (
    <div
      className={`w-full basis-7/12 flex flex-col justify-evenly text-center items-center ${display}`}
    >
      <p className="text-[0.95rem] mt-3">Transport Type</p>

      <section className="form w-10/12 mt-2 flex flex-col gap-4">
        <FormElementButtons content={"Open"} />
        <FormElementButtons content={"Enclosed"} />
      </section>
    </div>
  );
};

const Step_3 = ({ display, count, increment, decrement }) => {
  return (
    <div
      className={`w-full basis-7/12 flex flex-col justify-evenly text-center items-center ${display}`}
    >
      <p className="font-normal text-[0.95rem] mt-4">Vehicle</p>

      <form className="w-10/12 h-full flex flex-col gap-1">
        <YearOptions />
        <select
          name="make"
          id="make"
          className="p-2 h-10 w-full outline-none rounded-lg duration-[0.2s] focus:border-2 focus:border-solid focus:border-[#b3002d] font-normal text-sm text-slate-500"
        >
          <option value="make">Make</option>
        </select>
        <select
          name="model"
          id="model"
          className="p-2 h-10 w-full outline-none rounded-lg duration-[0.2s] focus:border-2 focus:border-solid focus:border-[#b3002d] font-normal text-sm text-slate-500"
        >
          <option value="Model">Model</option>
        </select>
      </form>
    </div>
  );
};

const Step_4 = ({ display, count, increment, decrement }) => {
  return (
    <div
      className={`w-full basis-7/12 flex flex-col justify-evenly text-center items-center ${display}`}
    >
      <p className="font-normal text-[0.95rem] mt-4">
        Get an <strong>instant</strong> & <strong>free quote</strong> or call
        (888) 491-7162
      </p>
    </div>
  );
};

const Step_5 = ({ display, count, increment, decrement }) => {
  return (
    <div
      className={`w-full basis-7/12 flex flex-col justify-evenly text-center items-center ${display}`}
    >
      <p className="font-normal text-[0.95rem] mt-4">
        Get an <strong>instant</strong> & <strong>free quote</strong> or call
        (888) 491-7162
      </p>
    </div>
  );
};

const Stepper = () => {
  const stepperState = useSelector((store) => store.stepper);
  const [count, setCount] = useState(1);
  const subSectionFirstSecondParagraphContent =
    "No credit card required! Schedule and save money now.";
  const subSectionThirdParagraphContent = "Shipping multiple cars?";
  const subSectionFourthParagraphContent = "24/7 Customer Service";
  const subSectionFifthParagraphFirstContent =
    "By continuing, you agree to our ";
  const subSectionFifthParagraphSecondContent = " and acknowledge ";

  const increment = () => {
    count < 5 && setCount(count + 1);
  };

  const decrement = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-evenly">
      <div className="flex mt-4">
        <StepperStep
          backgroundColor={count >= 1 ? "[#b3002d]" : "[#ededed]"}
          textColor={count >= 1 ? "white" : "slate-400"}
          lineColor={count > 1 ? "[#b3002d]" : "slate-200"}
          content={"1"}
        />
        <StepperStep
          backgroundColor={count >= 2 ? "[#b3002d]" : "[#ededed]"}
          textColor={count >= 2 ? "white" : "slate-400"}
          lineColor={count > 2 ? "[#b3002d]" : "slate-200"}
          content={"2"}
        />
        <StepperStep
          backgroundColor={count >= 3 ? "[#b3002d]" : "[#ededed]"}
          textColor={count >= 3 ? "white" : "slate-400"}
          lineColor={count > 3 ? "[#b3002d]" : "slate-200"}
          content={"3"}
        />
        <StepperStep
          backgroundColor={count >= 4 ? "[#b3002d]" : "[#ededed]"}
          textColor={count >= 4 ? "white" : "slate-400"}
          lineColor={count > 4 ? "[#b3002d]" : "slate-200"}
          content={"4"}
        />
        <StepperStep
          backgroundColor={count >= 5 ? "[#b3002d]" : "[#ededed]"}
          textColor={count >= 5 ? "white" : "slate-400"}
          content={"5"}
          display={"hidden"}
        />
      </div>
      <Step_1
        increment={increment}
        decrement={decrement}
        display={count === 1 ? "flex" : "hidden"}
        count={count}
      />
      <Step_2
        increment={increment}
        decrement={decrement}
        display={count === 2 ? "flex" : "hidden"}
        count={count}
      />
      <Step_3
        increment={increment}
        decrement={decrement}
        display={count === 3 ? "flex" : "hidden"}
        count={count}
      />
      <Step_4
        increment={increment}
        decrement={decrement}
        display={count === 4 ? "flex" : "hidden"}
        count={count}
      />
      <Step_5
        increment={increment}
        decrement={decrement}
        display={count === 5 ? "flex" : "hidden"}
        count={count}
      />
      <div className="w-full flex f-center gap-4 my-4 tablet:my-2 ">
        <StepperBackBtn
          display={count > 1 ? "inline-block" : "hidden"}
          onClickFunctionProp={decrement}
        />
        <StepperContinueBtn
          widthOfContinue={count === 1 ? "w-10/12" : "w-5/12"}
          onClickFunctionProp={increment}
        />
      </div>
      <SubSection
        paragraphContent={
          count === 1 || count === 2
            ? subSectionFirstSecondParagraphContent
            : count === 4
            ? subSectionFourthParagraphContent
            : count === 5 && subSectionFifthParagraphFirstContent
        }
        paragraphContent_2={
          count === 5 && subSectionFifthParagraphSecondContent
        }
        anchorContent={
          count === 3
            ? subSectionThirdParagraphContent
            : count === 5 && "Terms and Service"
        }
        anchorContent_2={count === 5 && "Privacy Policy"}
        firstHref={"/termsandconditions"}
        secondHref={"/"}
        firstAnchorStyle={count === 3 ? "underline" : "underline text-blue-500"}
        display={"flex"}
      />
    </div>
  );
};

export default Stepper;
