import React from "react";

const Imformation = ({ className, vehicleClassName }) => {
  return (
    <section
      className={`bg-white rounded-lg h-full flex f-center tablet:justify-self-center ${className}`}
    >
      <div className="w-[87%] h-full mt-4">
        <h1 className="font-bold mb-4 text-2xl">Summary</h1>
        <div
          className={`w-full h-20 border-[1px] border-solid border-slate-400 rounded-lg flex flex-col ft-center ${vehicleClassName}`}
        >
          <h2 className="font-bold">Vehicle</h2>
          <p className="opacity-55">Vehicle Model</p>
        </div>
        <div className="w-[60%] h-4/6 flex justify-between mt-2 tablet:w-full">
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
  );
};

export default Imformation;
