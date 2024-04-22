import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-full">
      <section className="custom-home-first-section bg-blend-overlay bg-cover bg-center w-full h-[85%]">
        <div className="flex flex-col justify-end h-full bg-green-400 w-4/6 mx-auto">
          <div className="w-full h-[59%] flex bg-red-400 ">
            <section className="flex flex-col justify-center w-7/12 h-full bg-slate-400">
              <div className="flex items-end h-1/2 w-5/6 bg-orange-500">
                <h1 className="text-5xl font-bold mb-2">
                  Home of Fast, Easy and Reliable Transportation
                </h1>
              </div>
              <div className="h-1/2 w-3/6 bg-orange-400">
                <h3 className="text-xl mt-2">
                  Wimple Auto Transport: Redefining Excellence in Auto
                  Transportation
                </h3>
              </div>
            </section>
            <section className="flex items-center justify-end w-5/12 h-full bg-slate-500">
              <div className="w-8/12 h-4/6 bg-white"></div>
            </section>
          </div>
          <div className="w-full h-2/6 bg-red-500">
            <h1></h1>
            <section>
              <section></section>
              <section></section>
              <section></section>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
