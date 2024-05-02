import React, { useEffect, useRef, useState } from "react";

const SlideCard = ({ src, alt, h1, paragraph }) => {
  return (
    <div className="basis-1/4 slide">
      <img src={src} alt={alt} />
      <div className="w-[80%] mx-auto h-auto text-center">
        <h1 className="text-2xl font-bold p-3 tablet:text-lg">{h1}</h1>
        <p className="mb-4 font-normal text-lg tablet:text-sm">{paragraph}</p>
      </div>
    </div>
  );
};

const SlideButtons = ({ index, setMarginIndex, delay }) => {
  const handleClick = (marginIndex) => {
    setMarginIndex(marginIndex);
  };

  return (
    <div className="w-20 h-8 flex justify-between items-center">
      <button
        id="0"
        onClick={() => {
          handleClick("0");
          setTimeout(() => setMarginIndex(0), delay);
        }}
        className={`w-2 h-2 bg-slate-700 rounded-[50%] opacity-60 manuel-btn`}
        style={{ opacity: index === 0 ? "1" : "0.6" }}
      ></button>
      <button
        id="1"
        onClick={() => {
          handleClick("1");
          setTimeout(() => setMarginIndex(1), delay);
        }}
        className={`w-2 h-2 bg-slate-700 rounded-[50%] opacity-60 manuel-btn`}
        style={{ opacity: index === 1 ? "1" : "0.6" }}
      ></button>
      <button
        id="2"
        onClick={() => {
          handleClick("2");
          setTimeout(() => setMarginIndex(2), delay);
        }}
        className={`w-2 h-2 bg-slate-700 rounded-[50%] opacity-60 manuel-btn`}
        style={{ opacity: index === 2 ? "1" : "0.6" }}
      ></button>
      <button
        id="3"
        onClick={() => {
          handleClick("3");
          setTimeout(() => setMarginIndex(3), delay);
        }}
        className={`w-2 h-2 bg-slate-700 rounded-[50%] opacity-60 manuel-btn`}
        style={{ opacity: index === 3 ? "1" : "0.6" }}
      ></button>
    </div>
  );
};

export { SlideButtons };
export default SlideCard;
