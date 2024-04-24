import React from "react";
import Reviews from "../components/Reviews";
import SlideCard, { SliderNav } from "../components/SlideCards";
import doorToDoor from "../images/doortodoorservice.png";
import orderTracking from "../images/ordertracking.png";
import customerService from "../images/customerservice.png";
import payment from "../images/payment.png";

const Home = () => {
  return (
    <div className="h-auto w-full">
      <section className="custom-home-first-section bg-blend-overlay bg-cover bg-center w-full h-[85vh]">
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
            <section className="flex items-center justify-end w-6/12 h-full">
              <div className="w-8/12 h-4/6 bg-white rounded-md"></div>
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
      <section className="p-8">
        <div className="relative max-w-3xl my-0 mx-auto">
          <div className="slider flex aspect-video overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-lg">
            <SlideCard
              id="slide-1"
              alt="door-to-door service foto"
              src={doorToDoor}
            />
            <SlideCard
              id="slide-2"
              alt="order tracking foto"
              src={orderTracking}
            />
            <SlideCard
              id="slide-3"
              alt="customer service foto"
              src={customerService}
            />
            <SlideCard
              id="slide-4"
              alt="zero upfront payment foto"
              src={payment}
            />
          </div>
          <div className="slider-nav flex gap-x-4 absolute bottom-5 left-1/2 translate-x-[-50%] z-10">
            <SliderNav href="#slide-1" />
            <SliderNav href="#slide-2" />
            <SliderNav href="#slide-3" />
            <SliderNav href="#slide-4" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
