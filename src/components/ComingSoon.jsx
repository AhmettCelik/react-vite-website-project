import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex ft-center flex-col gap-5 h-screen w-full bg-[#ededed]">
      <h1 className="text-5xl font-bold">Great Things Coming Soon</h1>
      <p className="w-5/12 font-normal text-xl opacity-80">
        In the very near future, we'll be adding new services for you. Add you
        email below and be the first known of this feature.
      </p>
      <section className="flex justify-evenly w-[27%]">
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border-2 rounded py-2 px-3 h-full w-80"
          />
        </div>
        <button className="bg-[#b3002d] rounded text-white h-full px-8">
          Subscribe
        </button>
      </section>
    </div>
  );
};

export default ComingSoon;
