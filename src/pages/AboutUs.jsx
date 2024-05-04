import React from "react";
import firstPhoto from "../images/aboutusfirst.png";
import aboutusguy from "../images/aboutusguy.png";
import options from "../images/answer.png";
import timesave from "../images/clock.png";
import location from "../images/distance.png";
import price from "../images/price-tag.png";
import customerservice from "../images/support.png";
import shipment from "../images/tracking.png";
import BackToTopBtn from "../components/BackToTopBtn";

const WhyChooseUs = ({
  whyChooseUsPng,
  whyChooseUsTitleContent,
  whyChooseUsParagraphContent,
  whyChooseUsImageAlt,
}) => {
  return (
    <div className="flex justify-evenly items-center w-full">
      <div className="rounded-xl bg-[#b3002d] max-h-8 max-w-8 p-8 flex f-center">
        <img
          src={whyChooseUsPng}
          alt={whyChooseUsImageAlt}
          className="max-w-8 max-h-8"
        />
      </div>
      <div className="text-start max-w-[70%] h-48 flex flex-col justify-center">
        <h2 className="font-bold">{whyChooseUsTitleContent}</h2>
        <p className="font-normal">{whyChooseUsParagraphContent}</p>
      </div>
    </div>
  );
};

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
      <section className="w-full h-auto flex justify-center mt-24 mb-24 tablet:flex-col tablet:items-center">
        <div className="w-[67%] flex justify-end relative tablet:flex-col tablet:items-center">
          <div>
            <div className="custom-about-us-photo bg-cover w-[26%] h-[93%] max-h-80 absolute left-[-1.7rem] top-8 z-30"></div>
            <div className="w-[26.9%] h-[96%] max-h-80 bg-black absolute left-[-2rem] top-[1.7rem] rounded z-20"></div>
            <div className="w-[26.9%] h-[96%] max-h-80 bg-pink-600 absolute left-[-2rem] top-[1.7rem] rounded rotate-[-17deg] z-10"></div>
          </div>

          <div className="w-[70%] tablet:flex-col">
            <div className="flex items-center justify-between w-[22rem] tablet:flex-col">
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
      <section className="w-full flex flex-col ft-center mb-32 mt-44">
        <div className="w-[67%] h-auto">
          <h1 className="font-bold text-4xl">Why Choose Us?</h1>
        </div>
        <div className="w-[67%] h-[34rem] grid grid-cols-[2fr_1.2fr_2fr]">
          <WhyChooseUs
            whyChooseUsImageAlt={"price tag icon"}
            whyChooseUsPng={price}
            whyChooseUsTitleContent={"Competitive Pricing"}
            whyChooseUsParagraphContent={
              "Wimple offers the most competitive prices in the market compared to other companies."
            }
          />
          <div className="row-span-3 self-center">
            <img src={aboutusguy} alt="a guy" />
          </div>
          <WhyChooseUs
            whyChooseUsImageAlt={"order tracking icon"}
            whyChooseUsPng={location}
            whyChooseUsTitleContent={"Order Tracking"}
            whyChooseUsParagraphContent={
              "We provide customers real-time updates on their vehicle's status and delivery through our website."
            }
          />
          <WhyChooseUs
            whyChooseUsImageAlt={"flexible payment options icon"}
            whyChooseUsPng={options}
            whyChooseUsTitleContent={"Flexible Payment Options"}
            whyChooseUsParagraphContent={
              "We offer a variety of flexible payment options to meet your needs."
            }
          />
          <WhyChooseUs
            whyChooseUsImageAlt={"clock icon"}
            whyChooseUsPng={timesave}
            whyChooseUsTitleContent={"Express Transportation"}
            whyChooseUsParagraphContent={
              "We provide fast and reliable transportation with minimal wait times, prioritizing our customer's urgent needs."
            }
          />
          <WhyChooseUs
            whyChooseUsImageAlt={"24/7 customer service icon"}
            whyChooseUsPng={customerservice}
            whyChooseUsTitleContent={"24/7 Customer Service"}
            whyChooseUsParagraphContent={
              "We offer 24/7 customer support. Our team is available to help with any questions or issues you have via phone, email, or live chat. We pride ourselves on providing personalized and reliable support to ensure your satisfaction."
            }
          />
          <WhyChooseUs
            whyChooseUsImageAlt={"shipment icon"}
            whyChooseUsPng={shipment}
            whyChooseUsTitleContent={"Door-to-door Service"}
            whyChooseUsParagraphContent={
              "Our company offers a comprehensive door-to-door service to our valued customers. You can expect your vehicle to arrive at your doorstep, fully prepared and ready to go, without any additional effort required on your part."
            }
          />
        </div>
      </section>
      <section className="w-full mb-32">
        <div className="w-[67%] text-center mx-auto">
          <h1 className="font-bold text-4xl mb-8">
            Get your discounted qutoe now!
          </h1>
          <BackToTopBtn
            padding={{ paddingY: "0.5rem", paddingX: "3rem" }}
            textSize="text-2xl"
          />
        </div>
      </section>
      <p className="invisible">By eniac</p>
    </div>
  );
};

export default AboutUs;
