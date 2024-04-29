import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Message = ({ text, sender }) => {
  return (
    <div
      className={`${
        sender == "customer"
          ? "bg-[#ba0000] right-[-7rem] top-3"
          : "bg-gray-100"
      } rounded-lg px-2 py-1 h-auto w-auto max-w-[70%] relative mb-2 z-10
      `}
    >
      <p
        className={`${
          sender == "customer" ? "text-white" : "text-white"
        } w-auto h-auto`}
      >
        {text}
      </p>
    </div>
  );
};

const MessageForm = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState("invisible");

  const handleMessageSend = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage("");
      setDisplay("invisible");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleMessageSend();
      setDisplay("invisible");
    }
  };

  const handleDisplayButton = (value) => {
    if (value !== "") {
      setDisplay("visible");
    } else setDisplay("invisible");
  };

  return (
    <div className="w-full flex justify-evenly item-center mt-3">
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          handleDisplayButton(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Enter your message..."
        className="font-normal text-sm w-9/12 bg-transparent outline-none"
      />
      <button
        onClick={handleMessageSend}
        className={`bg-[#ba0000] text-white py-2 px-3 rounded-xl ${display}`}
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
};

const ChatUsBox = ({ display }) => {
  const [messages, setMessages] = useState([]);

  const handleMessageSend = (text) => {
    setMessages([...messages, { text, sender: "customer" }]);
  };

  useEffect(() => {
    const chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
  }, [messages]);
  return (
    <div
      className={`custom-chat-us fixed bottom-[7rem] right-8 bg-white rounded-xl h-[75%] w-[25rem] duration-[0.5s] ${display}`}
    >
      <section className="custom-chat-us-first-section w-full h-[21%] bg-[#ba0000] flex flex-col items-center justify-evenly">
        <div className="bg-[#a60000] w-auto flex ft-center px-7 py-[0.4rem] rounded-3xl text-white gap-2">
          <FontAwesomeIcon icon={faComments} />
          <p className="text-[0.8rem]">Chat</p>
        </div>
        <div className="flex relative w-20">
          <div className="bg-white border-4 border-solid border-[#8f0000] h-12 w-12 rounded-full flex ft-center">
            <img src={logo} alt="logo png" className="w-8 h-8" />
          </div>
          <div className="bg-white border-4 border-solid border-[#8f0000] h-12 w-12 rounded-full absolute left-8 flex ft-center">
            <img src={logo} alt="logo png" className="w-8 h-8" />
          </div>
        </div>
        <p className="text-slate-200 text-sm">
          Do you have questions? Chat with us!
        </p>
        <p className="text-slate-300 font-normal text-[0.7rem]">
          Last seen section
        </p>
      </section>
      <section className="custom-chat-us-second-section w-full h-[79%] bg-slate-400">
        <div
          id="chat-box"
          className="for-custom-scroll-bar bg-slate-500 w-full h-[82%] relative overflow-y-auto"
        >
          {messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender} />
          ))}
        </div>
        <div className="custom-chat-us-second-section bg-slate-600 w-full h-[18%] flex flex-col items-center relative z-20">
          <hr className="w-[95%] border-slate-400" />
          <MessageForm onSend={handleMessageSend} />
        </div>
      </section>
    </div>
  );
};

const ChatUs = () => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay((prevState) => !prevState);
  };

  return (
    <div className="fixed h-[70%] w-72">
      <ChatUsBox display={display ? "block" : "hidden"} />;
      <button
        onClick={handleClick}
        className="custom-chat-us bg-white h-16 w-16 rounded-full fixed bottom-8 right-8 flex ft-center active:w-[3.9rem] active:h-[3.9rem] duration-[0.1s]"
      >
        <img src={logo} alt="logo png" className="w-auto h-[3.5rem]" />
      </button>
    </div>
  );
};

export default ChatUs;
