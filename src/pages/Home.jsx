import React, { useEffect, useRef, useState } from "react";
import Reviews, { CommentReviewsSection } from "../components/Reviews";
import doorToDoor from "../images/doortodoorservice.png";
import orderTracking from "../images/ordertracking.png";
import customerService from "../images/customerservice.png";
import payment from "../images/payment.png";
import mapFoto from "../images/map.png";
import SlideCard, { SlideButtons } from "../components/SlideCards";
import Questions from "../components/Faqs";
import BackToTopBtn from "../components/BackToTopBtn";
import Stepper from "../components/Stepper";

const Home = () => {
  const margins = ["0", "-25%", "-50%", "-75%"];
  const delay = 7000;
  const [index, setIndex] = useState(0);
  const currentMargin = margins[index];

  useEffect(() => {
    const interval = setInterval(
      () =>
        setIndex((prevIndex) =>
          prevIndex === margins.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-auto w-full bg-[#ededed]">
      <section className="custom-home-first-section bg-blend-overlay bg-cover bg-center w-full h-[85vh] tablet:h-[70vh]">
        <div className="flex flex-col justify-end h-full w-4/6 tablet:w-full mx-auto">
          <div className="w-full h-[59%] flex tablet:flex-col tablet:items-center tablet:text-center tablet:h-full">
            <section className="flex flex-col tablet:items-center justify-center tablet:justify-end w-7/12 tablet:w-full h-full tablet:h-[60%]">
              <div className="flex items-end h-1/2 w-5/6 tablet:w-full">
                <h1 className="text-5xl tablet:text-3xl font-bold text-white">
                  Home of Fast, Easy and Reliable Transportation
                </h1>
              </div>
              <div className="md:h-1/2 w-4/6 tablet:w-full">
                <h3 className="text-xl tablet:lg mt-10 tablet:mt-4 text-white">
                  Wimple Auto Transport: Redefining Excellence in Auto
                  Transportation
                </h3>
              </div>
            </section>
            <section className="flex items-center justify-end tablet:justify-center w-6/12 tablet:w-full h-full tablet:h-5/6">
              <div className="w-8/12 tablet:w-[98%] tablet:min-h-[80%] bg-white rounded-md">
                <Stepper />
              </div>
            </section>
          </div>
          <div className="w-full h-2/6 hidden min-tablet:block">
            <div className="h-2/6 flex justify-center items-end">
              <h1 className="text-4xl font-bold text-white">
                Trusted by Customers from All Over Country
              </h1>
            </div>
            <Reviews textColor="text-white" />
          </div>
        </div>
      </section>
      <section className="w-full mt-32 tablet:mt-12 flex ft-center">
        <CommentReviewsSection />
      </section>
      <section className="flex flex-col f-center mt-12 mb-32 tablet:mb-20">
        <div className="slider w-[45%] tablet:w-[90%] tablet:h-[full] rounded-xl border-2 border-slate-400 overflow-hidden">
          <div className="slides flex w-[400%]">
            <div
              id="first"
              className="basis-1/4 slide"
              style={{ marginLeft: `${currentMargin}` }}
            >
              <img src={doorToDoor} alt="door to door service foto" />
              <div className="w-[80%] mx-auto h-auto text-center">
                <h1 className="text-2xl font-bold p-3 tablet:text-lg">
                  Door-to-door Service
                </h1>
                <p className="mb-4 font-normal text-lg tablet:text-sm">
                  Our company offers a comprehensive door-to-door service to our
                  valued customers. You can expect your vehicle to arrive at
                  your doorstep, fully prepared and ready to go, without any
                  additional effort required."
                </p>
              </div>
            </div>
            <SlideCard
              src={orderTracking}
              alt="order tracking foto"
              h1="Order Tracking"
              paragraph="Track your vehicle step-by-step. We give our customers real-time
                updates on their vehicle's status and delivery."
            />
            <SlideCard
              src={customerService}
              alt="customer service foto"
              h1="24/7 Customer Service"
              paragraph="We offer 24/7 customer support. Our team is available to help
                with any questions or issues you have via phone, email, or live
                chat. We pride ourselves on providing personalized and reliable
                support to ensure your satisfaction."
            />
            <SlideCard
              src={payment}
              alt="payment foto"
              h1="Payment"
              paragraph="Booking a vehicle with zero upfront payment is now more secure
                and easy. You will only be charged when your vehicle is picked
                up."
            />
          </div>
        </div>
        <SlideButtons
          index={index}
          setMarginIndex={setIndex}
          timeDelay={delay}
        />
      </section>

      <section className="w-full h-auto flex f-center">
        <div className="w-4/6 tablet:w-[95%] h-auto flex flex-col ft-center">
          <h1 className="text-4xl tablet:text-3xl tablet:w-full font-bold">
            Vehicle Transportation Nationwide
          </h1>
          <img
            src={mapFoto}
            alt="map foto"
            className="my-12 w-auto h-128 tablet:w-auto tablet:h-auto"
          />
          <p className="font-normal text-lg tablet:text-sm mb-32 tablet:mb-28">
            At Wimple, we believe in transparency to empower your decisions. Our
            transportation costs are designed with your business in mind—clear,
            competitive, and tailored to your unique needs.{" "}
            <span className="font-bold">No hidden fees, no surprises.</span>{" "}
            Explore the simplicity of efficient logistics with us. Your success,
            our commitment.
          </p>
        </div>
      </section>
      <section className="mt-32 tablet:mt-0 mb-28 w-full h-auto">
        <Questions />
        <p className="text-center mt-20">
          Don't see your question above?{" "}
          <a href="" className="underline text-blue-400">
            Chat with us
          </a>{" "}
          or check out{" "}
          <a href="" className="underline text-blue-400">
            Help Center
          </a>
          .
        </p>
      </section>
      <section className="w-full mb-32">
        <div className="w-full text-center">
          <h1 className="font-bold text-4xl mb-8">
            Get your discounted qutoe now!
          </h1>
          <BackToTopBtn
            padding={{ paddingY: "0.5rem", paddingX: "3rem" }}
            textSize="text-2xl"
          />
        </div>
      </section>
      <p className="h-0 overflow-hidden">By Eniac</p>
    </div>
  );
};

export default Home;
