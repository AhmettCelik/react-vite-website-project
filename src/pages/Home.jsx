import React from "react";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div className="h-screen w-full">
      <section className="custom-home-first-section bg-blend-overlay bg-cover bg-center w-full h-[85%]">
        <div className="flex flex-col justify-end h-full w-4/6 mx-auto">
          <div className="w-full h-[59%] flex">
            <section className="flex flex-col justify-center w-7/12 h-full">
              <div className="flex items-end h-1/2 w-5/6">
                <h1 className="text-5xl font-bold text-white">
                  Home of Fast, Easy and Reliable Transportation
                </h1>
              </div>
              <div className="h-1/2 w-3/6">
                <h3 className="text-xl mt-10 text-white">
                  Wimple Auto Transport: Redefining Excellence in Auto
                  Transportation
                </h3>
              </div>
            </section>
            <section className="flex items-center justify-end w-5/12 h-full bg-slate-500">
              <div className="w-8/12 h-4/6 bg-white"></div>
            </section>
          </div>
          <div className="w-full h-2/6">
            <div className="h-2/6 flex justify-center items-end">
              <h1 className="text-4xl font-bold text-white">
                Trusted by Customers from All Over Country
              </h1>
            </div>
            <section className="flex justify-evenly h-4/6">
              <Reviews
                h2="5.00"
                p="Our service has received top ratings from hundred of satisfied
                  customers."
                id="review-first-section"
              />
              <Reviews
                h2={"#1"}
                p="The service provided by Wimple is considered the best in the
                  Industry."
                id="review-second-section"
              />
              <Reviews
                h2={"99%"}
                p="Customers are satisfied with fine service."
                id="review-third-section"
              />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
