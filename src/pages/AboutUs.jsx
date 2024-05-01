import React from "react";
import firstPhoto from "../images/aboutusfirst.png";

const AboutUs = () => {
  return (
    <div className="bg-[#ededed]">
      <section className="custom-about-first-section w-full h-[50vh] text-white mt-16 flex ft-center">
        <div className="flex flex-col justify-evenly items-center h-4/6 w-[67%]">
          <h1 className="text-4xl font-bold">
            Get to Know Our Story: Passionate and Reliable Auto Transportation
            Services
          </h1>
          <p className="font-normal text-xl">
            Helping people and businesses succeed through the power of
            efficiency.
          </p>
          <div className="flex gap-4">
            <button className="text-white bg-[#b3002d] py-2 px-4 rounded">
              Get a quote
            </button>
            <button className="border-2 border-solid border-[#b3002d] py-2 px-4 rounded">
              Learn more
            </button>
          </div>
        </div>
      </section>
      <section className="w-[67%] m-auto text-2xl font-bold">
        <h1 className="mt-4 text-white">
          We are committed to providing the best quality of service
        </h1>
      </section>
      <section className="w-full h-auto flex justify-center mt-24 mb-24">
        <div className="w-[67%] h-auto flex justify-end relative">
          <div>
            <div className="custom-about-us-photo bg-cover w-[26%] h-[93%] absolute left-[0.3rem] top-8 z-30"></div>
            <div className="w-[26.9%] h-[96%] bg-black absolute left-0 top-[1.7rem] rounded z-20"></div>
            <div className="w-[26.9%] h-[96%] bg-pink-600 absolute left-0 top-[1.7rem] rounded rotate-[-17deg] z-10"></div>
          </div>

          <div className="w-[70%]">
            <div className="flex items-center justify-between w-[22rem]">
              <h2 className="text-lg">Wimple Auto Transport</h2>
              <div className="h-[0.18rem] w-28 bg-[#b3002d]"></div>
            </div>
            <h1 className="font-bold text-3xl">
              Experienced Team Dedicated to Success
            </h1>
            <div className="font-normal flex flex-col gap-4 mt-4 w-11/12">
              <p>
                At Wimple, we are on a mission to revolutionize the vehicle
                transportation industry by providing fast, affordable, and
                hassle-free transportation services to people in need.
              </p>
              <p>
                Our top priority is ensuring customer satisfaction by going
                above and beyond to offer the best possible service. We believe
                in making transportation easy and affordable for everyone. We
                have designed our services to be accessible to everyone,
                regardless of budget or location.
              </p>
              <p>
                We offer a range of transportation options tailored to meet our
                customers' unique needs. Whether you need transportation for
                personal or business reasons, we are here to help. Our services
                are available 24/7, and we are always ready to assist you with
                any transportation needs. If you're in need of affordable,
                reliable, and fast transportation services, Wimple can provide
                the solution you're looking for.
              </p>
            </div>
          </div>
        </div>
      </section>
      <p className="invisible">By eniac</p>
    </div>
  );
};

export default AboutUs;
