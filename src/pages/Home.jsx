import React from "react";
import Reviews from "../components/Reviews";
import doorToDoor from "../images/doortodoorservice.png";
import orderTracking from "../images/ordertracking.png";
import customerService from "../images/customerservice.png";
import payment from "../images/payment.png";
import SlideCard, { SlideButton } from "../components/SlideCards";

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
      <section className="flex flex-col f-center">
        <div className="slider w-[45%] rounded-xl overflow-hidden">
          <div className="slides flex w-[400%]">
            <SlideCard
              src={doorToDoor}
              alt="door to door service foto"
              h1="Door-to-door Service"
              p="Our company offers a comprehensive door-to-door service to our
                  valued customers. You can expect your vehicle to arrive at
                  your doorstep, fully prepared and ready to go, without any
                  additional effort required."
            />
            <SlideCard
              src={orderTracking}
              alt="order tracking foto"
              h1="Order Tracking"
              p="Track your vehicle step-by-step. We give our customers real-time
                updates on their vehicle's status and delivery."
            />
            <SlideCard
              src={customerService}
              alt="customer service foto"
              h1="24/7 Customer Service"
              p="We offer 24/7 customer support. Our team is available to help
                with any questions or issues you have via phone, email, or live
                chat. We pride ourselves on providing personalized and reliable
                support to ensure your satisfaction."
            />
            <SlideCard
              src={payment}
              alt="payment foto"
              h1="Payment"
              p="Booking a vehicle with zero upfront payment is now more secure
                and easy. You will only be charged when your vehicle is picked
                up."
            />
          </div>
        </div>
        <div className="w-20 h-8 flex justify-between items-center">
          <SlideButton />
          <SlideButton />
          <SlideButton />
          <SlideButton />
        </div>
      </section>
    </div>
  );
};

export default Home;
