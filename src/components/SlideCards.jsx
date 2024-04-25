import React from "react";

const SlideCard = ({ src, alt, h1, p }) => {
  return (
    <div className="basis-1/4">
      <img src={src} alt={alt} />
      <div className="w-[80%] mx-auto h-auto text-center">
        <h1 className="text-2xl font-bold p-3">{h1}</h1>
        <p className="mb-4 font-normal text-lg">{p}</p>
      </div>
    </div>
  );
};

const SlideButton = () => {
  return (
    <button className="w-2 h-2 border-2 border-solid border-slate-500 rounded-[50%] duration-[1s]"></button>
  );
};

export { SlideButton };
export default SlideCard;
