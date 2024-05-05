import React from "react";
import Reviews from "../components/Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const PriceLiTags = ({ content }) => {
  return (
    <div className="flex text-center items-center">
      <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#00ff1e" }} />
      <li className="font-normal ml-2 opacity-60">{content}</li>
    </div>
  );
};

const QuotePage = () => {
  return (
    <div className="h-auto w-full bg-[#ededed]">
      <main className="flex f-center mt-16 mb-16 pt-16 h-[85vh] tablet:h-auto tablet:w-full">
        {/*Main Section*/}
        <section className="grid min-tablet:grid-cols-2 grid-rows-2 tablet:grid-rows-[1fr_400px_420px_300px] w-4/6 h-full tablet:w-10/12 tablet:gap-4">
          {/*Price Section*/}
          <section className="flex gap-4 tablet:flex-col tablet:w-full">
            <div className="h-[90%] w-5/12 bg-green-400 rounded-lg flex flex-col items-center justify-evenly tablet:w-full tablet:h-80">
              <h2 className="text-white text-center h-6">Best Dial</h2>
              <div className="bg-white w-[98%] h-[86%] rounded-md flex flex-col f-center">
                <div className="w-10/12 flex flex-col gap-2">
                  <h1 className="text-lg">Discounted Price</h1>
                  <h2 className="text-[2.7rem] font-bold">$657</h2>
                  <ul>
                    <PriceLiTags content={"Insurance"} />
                    <PriceLiTags content={"Door-to-doot service"} />
                    <PriceLiTags content={"24/7 Support"} />
                    <PriceLiTags content={"Order Tracking"} />
                    <PriceLiTags content={"Zero Upfront Payment"} />
                    <div className="flex text-center items-center">
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        style={{ color: "#ff0000" }}
                      />
                      <li className="font-normal ml-2 opacity-60">
                        Express Transportation
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-[90%] w-5/12 bg-white rounded-lg flex flex-col items-center justify-evenly tablet:w-full tablet:h-80">
              <h2 className="text-white text-center h-6"></h2>
              <div className="bg-white w-[98%] h-[86%] rounded-md flex flex-col f-center">
                <div className="w-10/12 flex flex-col gap-2">
                  <h1 className="text-lg">Express Price</h1>
                  <h2 className="text-[2.7rem] font-bold">$857</h2>
                  <ul>
                    <PriceLiTags content={"Insurance"} />
                    <PriceLiTags content={"Door-to-doot service"} />
                    <PriceLiTags content={"24/7 Support"} />
                    <PriceLiTags content={"Order Tracking"} />
                    <PriceLiTags content={"Zero Upfront Payment"} />
                    <PriceLiTags content={"Express Transportation"} />
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*Price Section*/}
          {/*Map Section*/}
          <section>
            <h2>Your Trip</h2>
            <div className="h-5/6 w-full bg-white shadow-xl rounded-sm tablet:h-5/6 tablet:mt-4"></div>
          </section>
          {/*Map Section*/}
          {/*Information Section*/}
          <section className="bg-white rounded-lg h-full w-[97%] flex f-center tablet:justify-self-center">
            <div className="w-[87%] h-full mt-4">
              <h1 className="font-bold mb-4 text-2xl">Summary</h1>
              <div className="w-full h-20 border-[1px] border-solid border-slate-400 rounded-lg flex flex-col ft-center">
                <h2 className="font-bold">Vehicle</h2>
                <p className="opacity-55">Vehicle Model</p>
              </div>
              <div className="w-[60%] h-4/6 flex justify-between mt-2">
                <div className="font-bold flex flex-col gap-2">
                  <p>Distance</p>
                  <p>Shipment Date</p>
                  <p>Origin</p>
                  <p>Destination</p>
                  <p>Vehicle Condition</p>
                  <p>Transport Type</p>
                </div>
                <div className="opacity-55 flex flex-col gap-2">
                  <p>mesafe</p>
                  <p>zaman</p>
                  <p>Nereden</p>
                  <p>Nereye</p>
                  <p>araç durumu</p>
                  <p>araç tipi</p>
                </div>
              </div>
            </div>
          </section>
          {/*Information Section*/}
          {/*Continue Section*/}
          <section className="bg-white rounded-lg w-full h-4/6 tablet:h-full flex f-center tablet:self-center">
            <div className="h-5/6 w-11/12 tablet:h-full tablet:flex tablet:flex-col tablet:gap-2 tablet:mt-8">
              <div className="flex gap-3 items-center justify-start">
                <p>Due Now</p>
                <p className="text-green-400 text-5xl">$0</p>
              </div>
              <p>
                Once the order is picked up by a carrier, one-time payment in
                full by using your credit or debit card will be charged.
              </p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Ex. SAVE20"
                  className="outline-none rounded my-3 py-2 px-2 w-5/12 border-[1px] border-solid border-slate-200 tablet:basis-1/2"
                />
                <button className="text-white bg-green-400 my-3 px-3 rounded-lg font-normal tablet:basis-1/2">
                  Apply Code
                </button>
              </div>
              <button className="text-white bg-green-400 px-3 py-2 rounded-lg font-normal w-5/12 tablet:w-full">
                Continue to booking details
              </button>
            </div>
          </section>
          {/*Continue Section*/}
        </section>
        {/*Main Section*/}
      </main>
      <section className="h-auto w-4/6 mx-auto pb-16">
        <div className="h-2/6 flex justify-center items-end">
          <h1 className="text-5xl font-bold">
            Trusted by Customers from All Over Country
          </h1>
        </div>
        <div className="h-4/6 mt-12">
          <Reviews />
        </div>
      </section>
    </div>
  );
};

export default QuotePage;
