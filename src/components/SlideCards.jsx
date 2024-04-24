import React from "react";

function SlideCards({ id, src, alt }) {
  return (
    <img
      id={id}
      src={src}
      alt={alt}
      className="flex-[1 0 100%] snap-start object-cover"
    />
  );
}

function SliderNav({ href }) {
  return (
    <a
      href={href}
      className="slider-nav_a w-2 h-2 rounded-[50%] opacity-75 bg-white hover:opacity-100"
    ></a>
  );
}

export { SliderNav };
export default SlideCards;
