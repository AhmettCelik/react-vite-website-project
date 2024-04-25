import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Question = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq  ${isActive ? "active-faq" : ""}`}>
      <div
        className="question cursor-pointer flex justify-between items-center border-b-[1px] border-solid border-black"
        onClick={toggleActive}
      >
        <h3 className="font-bold py-4">{question}</h3>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>

      <div id="answer" className="answer">
        <p className="font-normal pt-3 opacity-75 leading-[1.6]">{answer}</p>
      </div>
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="h-full w-7/12 mx-auto">
      <h2 className="font-bold text-3xl text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="bg-white rounded-lg p-5">
        <Question
          question="Can I put personal items in the car?"
          answer="You can pack personal items weighing up to 100 lbs in a single box or luggage piece to be transported in the car's trunk."
        />
        <Question
          question="Is insurance included during transportation?"
          answer="Yes, the carrier's cargo insurance will cover your vehicle during transport. Our contingent cargo insurance fully covers the value of the load in case the carrier's policy fails to protect a valid claim. You can know that your car will be fully covered for its journey when you book with Wimple."
        />
        <Question
          question="How long does it take the vehicle to be delivered?"
          answer="After you place your order, we will provide you with an estimated transit time for your shipment. This estimate will give you an idea of when to expect the delivery of your car. The time it takes for your vehicle to be delivered depends on the distance of the move. However, since each delivery is unique, your car may arrive earlier than the estimated transit time provided."
        />
        <Question
          question="Is live tracking available?"
          answer="At the moment, GPS tracking is unavailable. When you book a shipment, we will provide an ETA for transportation. You can also ask us for updates on your vehicle at any time."
        />
      </div>
    </div>
  );
};

export default Faqs;
