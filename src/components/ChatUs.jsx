import React from "react";
import logo from "../images/logo.png";

const ChatUsBox = () => {
  return <div></div>;
};

const ChatUs = () => {
  return (
    <button className="custom-chat-us bg-white h-16 w-16 rounded-full fixed bottom-8 right-8 flex ft-center active:w-[3.9rem] active:h-[3.9rem] duration-[0.1s]">
      <img src={logo} alt="logo png" className="w-auto h-[3.5rem]" />
    </button>
  );
};

export default ChatUs;
