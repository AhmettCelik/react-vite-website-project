import React from "react";
import Faqs from "../components/Faqs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const HelpCenterBtns = ({ icon, helpCenter_h3, helpCenter_p, customClass }) => {
  return (
    <div className="bg-white rounded-xl ">
      <button className="h-48 w-36">
        <FontAwesomeIcon icon={icon} size="w-auto h-16" />
        <h3 className="font-bold text-2xl">{helpCenter_h3}</h3>
        <p className="font-normal">{helpCenter_p}</p>
      </button>
    </div>
  );
};

const HelpCenter = () => {
  return (
    <div className="h-screen bg-[#ededed] tablet:h-full tablet:py-32">
      <div className="h-full flex flex-col justify-evenly items-center mt-8">
        <h1 className="font-bold text-4xl">How can we help you?</h1>
        <div>
          <Faqs />
        </div>
        <div className="flex justify-between h-auto w-2/6 tablet:flex-col tablet:gap-4 tablet:mt-12 tablet:w-5/6 tablet:text-center">
          <HelpCenterBtns
            icon={faPhone}
            helpCenter_h3="Call Us"
            helpCenter_p="<5 min wait"
          />
          <HelpCenterBtns
            icon={faComments}
            helpCenter_h3="Chat Us"
            helpCenter_p="<1 min wait"
          />
          <HelpCenterBtns icon={faEnvelope} helpCenter_h3="E-mail" />
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
