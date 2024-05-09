import React from "react";
import { useSelector } from "react-redux";

const PaymentImformationSection = () => {
  const informations = useSelector((store) => store.stepper.formValues);
  return (
    <div className="w-[40%] rounded-xl h-[22rem] bg-white ">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <h1 className="font-bold mb-4 text-2xl w-[90%]">Summary</h1>

        <div className="w-[90%] h-4/6 flex justify-between mt-2 tablet:w-full text-lg">
          <div className="font-bold flex flex-col gap-2">
            <p>Distance</p>
            <p>Shipment Date</p>
            <p>Origin</p>
            <p>Destination</p>
            <p>Vehicle Condition</p>
            <p>Transport Type</p>
            <p>Price</p>
          </div>
          <div className="opacity-55 flex flex-col gap-2 w-48 text-lg">
            <p>mesafe</p>
            <p>{informations.shippingDate}</p>
            <p>{informations.fromCity}</p>
            <p>{informations.toCity}</p>
            <p>{informations.condition}</p>
            <p>{informations.transportType}</p>
            <p>fiyat değeri</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentStepper = () => {
  return <div className="rounded-xl bg-white w-full h-32"></div>;
};

const InfoSection = () => {
  return (
    <div className="w-[55%] h-[22rem]  flex">
      <section>
        <div>
          <h1>Contact Information</h1>
        </div>
        <div>
          <div className="relative">
            <input
              type="text"
              id="full-name"
              className="input outline-none px-2 py-1 rounded"
            />
            <label
              htmlFor="full-name"
              className="paymentPlaceholder absolute top-[0.4rem] left-1 px-1 duration-[0.3s] opacity-55 text-sm pointer-events-none"
            >
              Full name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              className="input outline-none px-2 py-1 rounded"
            />
            <label
              htmlFor="email"
              className="paymentPlaceholder absolute top-[0.4rem] left-1 px-1 duration-[0.3s] opacity-55 text-sm pointer-events-none"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="phone-number"
              className="input outline-none px-2 py-1 rounded"
            />
            <label
              htmlFor="phone-number"
              className="paymentPlaceholder absolute top-[0.4rem] left-1 px-1 duration-[0.3s] opacity-55 text-sm pointer-events-none"
            >
              Phone number
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="extra-phone-number"
              className="input outline-none px-2 py-1 rounded"
            />
            <label
              htmlFor="extra-phone-number"
              className="paymentPlaceholder absolute top-[0.4rem] left-1 px-1 duration-[0.3s] opacity-55 text-sm pointer-events-none"
            >
              Full name
            </label>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>You are</h1>
        </div>
        <div></div>
      </section>
    </div>
  );
};

const Payment = () => {
  return (
    <div className="bg-[#ededed] h-auto py-32">
      <div className="bg-slate-400 h-full w-8/12 mx-auto">
        {/*Payment Stepper Section*/}
        <PaymentStepper />
        {/*Payment Stepper Section*/}
        <section className="h-auto w-full mt-5">
          <section className="h-[60%] w-full flex justify-evenly items-center">
            {/*Info Section*/}
            <InfoSection />
            {/*Info Section*/}
            {/*Information Section*/}
            <PaymentImformationSection />
            {/*Information Section*/}
          </section>
        </section>
      </div>
    </div>
  );
};

export default Payment;
