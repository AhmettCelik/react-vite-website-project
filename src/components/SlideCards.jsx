import React, { useEffect } from "react";

const SlideCard = ({ src, alt, h1, p }) => {
  return (
    <div className="basis-1/4 slide">
      <img src={src} alt={alt} />
      <div className="w-[80%] mx-auto h-auto text-center">
        <h1 className="text-2xl font-bold p-3">{h1}</h1>
        <p className="mb-4 font-normal text-lg">{p}</p>
      </div>
    </div>
  );
};

const SlideButtons = ({ firstSlide }) => {
  const handleClick = (margin) => {
    firstSlide.classList.remove("ml-0", "ml-[-25%]", "ml-[-50%]", "ml-[-75%]");
    firstSlide.classList.add(margin);
  };

  return (
    <div className="w-20 h-8 flex justify-between items-center">
      <button
        onClick={() => handleClick("ml-0")}
        className="w-2 h-2 bg-slate-700 rounded-[50%] opacity-60 manuel-btn"
      ></button>
      <button
        onClick={() => handleClick("ml-[-25%]")}
        className="w-2 h-2 bg-slate-700 rounded-[50%] opacity-60 manuel-btn"
      ></button>
      <button
        onClick={() => handleClick("ml-[-50%]")}
        className="w-2 h-2 bg-slate-700 rounded-[50%] opacity-60 manuel-btn"
      ></button>
      <button
        onClick={() => handleClick("ml-[-75%]")}
        className="w-2 h-2 bg-slate-700 rounded-[50%] opacity-60 manuel-btn"
      ></button>
    </div>
  );
};

export { SlideButtons };
export default SlideCard;
