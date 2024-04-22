import React from "react";

const Reviews = ({ h2, p, id }) => {
  return (
    <section className="w-[24%] text-center flex flex-col justify-center text-white">
      <div className="flex justify-center mb-2">
        {/*<img src={src} alt={alt} className="w-auto h-12 mr-2" />*/}
        <h2 id={id} className="font-bold text-5xl">
          {h2}
        </h2>
      </div>
      <p>{p}</p>
    </section>
  );
};

export default Reviews;
