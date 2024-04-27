import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

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

const StepperStep = ({
  display,
  backgroundColor,
  textColor,
  lineColor,
  content,
  count,
}) => {
  const handleClick = () => {
    count > content && (count = content);
  };

  return (
    <section className="flex ft-center">
      <div
        onClick={handleClick}
        className={`bg-${backgroundColor} w-7 h-7 rounded-full flex ft-center cursor-pointer`}
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
    <div className={`w-full flex ft-center h-3/12 ${props.display}`}>
      <p className="font-normal text-center text-sm w-11/12">
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

const Step_1 = ({ display, count }) => {
  return (
    <div
      className={`w-full basis-7/12 flex flex-col justify-evenly text-center items-center ${display}`}
    >
      <p className="font-normal text-[0.95rem]">
        Get an <strong>instant</strong> & <strong>free quote</strong> or call
        (888) 491-7162
      </p>
      <div className="h-8 flex justify-center items-center">
        <button className="mr-4">
          <FontAwesomeIcon icon={faCaretDown} rotation={90} />
        </button>
        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"slate-200"}
          content={1}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#ededed]"}
          textColor={"slate-400"}
          lineColor={"slate-200"}
          content={2}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#ededed]"}
          textColor={"slate-400"}
          lineColor={"slate-200"}
          content={3}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#ededed]"}
          textColor={"slate-400"}
          lineColor={"slate-200"}
          content={4}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#ededed]"}
          textColor={"slate-400"}
          content={5}
          display="hidden"
        />
        <button className="ml-4">
          <FontAwesomeIcon icon={faCaretDown} rotation={270} />
        </button>
      </div>
      <form className="form w-10/12 mt-2 flex flex-col gap-4">
        <FormElement formElementContent="From (ZIP or City)" />
        <FormElement formElementContent="To (ZIP or City)" />
      </form>
    </div>
  );
};

const Step_2 = ({ display, count }) => {
  return (
    <div
      className={`w-full basis-7/12 flex flex-col justify-evenly text-center items-center ${display}`}
    >
      <p className="font-normal text-[0.95rem]">
        Get an <strong>instant</strong> & <strong>free quote</strong> or call
        (888) 491-7162
      </p>
      <div className="w-full h-8 flex justify-center items-center">
        <button className="mr-4">
          <FontAwesomeIcon icon={faCaretDown} rotation={90} />
        </button>

        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"[#b3002d]"}
          content={1}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"slate-200"}
          content={2}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#ededed]"}
          textColor={"slate-400"}
          lineColor={"slate-200"}
          content={3}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#ededed]"}
          textColor={"slate-400"}
          lineColor={"slate-200"}
          content={4}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#ededed]"}
          textColor={"slate-400"}
          content={5}
          display="hidden"
        />
        <button className="ml-4">
          <FontAwesomeIcon icon={faCaretDown} rotation={270} />
        </button>
      </div>
      <form className="form w-10/12 mt-2 flex flex-col gap-4">
        <FormElement formElementContent="From (ZIP or City)" />
        <FormElement formElementContent="To (ZIP or City)" />
      </form>
    </div>
  );
};

const Step_3 = ({ display, count }) => {
  return (
    <div
      className={`w-full basis-7/12 flex flex-col justify-evenly text-center items-center ${display}`}
    >
      <p className="font-normal text-[0.95rem]">
        Get an <strong>instant</strong> & <strong>free quote</strong> or call
        (888) 491-7162
      </p>
      <div className="w-full h-8 flex justify-center items-center">
        <button className="mr-4">
          <FontAwesomeIcon icon={faCaretDown} rotation={90} />
        </button>

        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"[#b3002d]"}
          content={1}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"[#b3002d]"}
          content={2}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"slate-200"}
          content={3}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#ededed]"}
          textColor={"slate-400"}
          lineColor={"slate-200"}
          content={4}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#ededed]"}
          textColor={"slate-400"}
          content={5}
          display="hidden"
        />
        <button className="ml-4">
          <FontAwesomeIcon icon={faCaretDown} rotation={270} />
        </button>
      </div>
      <form className="form w-10/12 mt-2 flex flex-col gap-4">
        <FormElement formElementContent="From (ZIP or City)" />
        <FormElement formElementContent="To (ZIP or City)" />
      </form>
    </div>
  );
};

const Step_4 = ({ display, count }) => {
  return (
    <div
      className={`w-full basis-7/12 flex flex-col justify-evenly text-center items-center ${display}`}
    >
      <p className="font-normal text-[0.95rem]">
        Get an <strong>instant</strong> & <strong>free quote</strong> or call
        (888) 491-7162
      </p>
      <div className="w-full h-8 flex justify-center items-center">
        <button className="mr-4">
          <FontAwesomeIcon icon={faCaretDown} rotation={90} />
        </button>

        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"[#b3002d]"}
          content={1}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"[#b3002d]"}
          content={2}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"[#b3002d]"}
          content={3}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"slate-200"}
          content={4}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#ededed]"}
          textColor={"slate-400"}
          content={5}
          display="hidden"
        />
        <button className="ml-4">
          <FontAwesomeIcon icon={faCaretDown} rotation={270} />
        </button>
      </div>
      <form className="form w-10/12 mt-2 flex flex-col gap-4">
        <FormElement formElementContent="From (ZIP or City)" />
        <FormElement formElementContent="To (ZIP or City)" />
      </form>
    </div>
  );
};

const Step_5 = ({ display, count }) => {
  return (
    <div
      className={`w-full basis-7/12 flex flex-col justify-evenly text-center items-center ${display}`}
    >
      <p className="font-normal text-[0.95rem]">
        Get an <strong>instant</strong> & <strong>free quote</strong> or call
        (888) 491-7162
      </p>
      <div className="w-full h-8 flex justify-center items-center">
        <button className="mr-4">
          <FontAwesomeIcon icon={faCaretDown} rotation={90} />
        </button>

        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"[#b3002d]"}
          content={1}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"[#b3002d]"}
          content={2}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"[#b3002d]"}
          content={3}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          lineColor={"[#b3002d]"}
          content={4}
        />
        <StepperStep
          count={count}
          backgroundColor={"[#b3002d]"}
          textColor={"white"}
          content={5}
          display="hidden"
        />
        <button className="ml-4">
          <FontAwesomeIcon icon={faCaretDown} rotation={270} />
        </button>
      </div>
      <form className="form w-10/12 mt-2 flex flex-col gap-4">
        <FormElement formElementContent="From (ZIP or City)" />
        <FormElement formElementContent="To (ZIP or City)" />
      </form>
    </div>
  );
};

const Stepper = () => {
  const [count, setCount] = useState(1);
  const subSectionFirstSecondParagraphContent =
    "No credit card required! Schedule and save money now.";
  const subSectionThirdParagraphContent = "Shipping multiple cars?";
  const subSectionFourthParagraphContent = "24/7 Customer Service";
  const subSectionFifthParagraphFirstContent =
    "By continuing, you agree to our ";
  const subSectionFifthParagraphSecondContent = " and acknowledge ";

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <Step_1 display={count === 1 ? "flex" : "hidden"} count={count} />
      <Step_2 display={count === 2 ? "flex" : "hidden"} count={count} />
      <Step_3 display={count === 3 ? "flex" : "hidden"} count={count} />
      <Step_4 display={count === 4 ? "flex" : "hidden"} count={count} />
      <Step_5 display={count === 5 ? "flex" : "hidden"} count={count} />
      <div className="w-full flex f-center gap-4">
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
