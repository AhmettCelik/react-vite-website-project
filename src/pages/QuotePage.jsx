import React from "react";
import Reviews from "../components/Reviews";

const QuotePage = () => {
  return (
    <div className="h-screen">
      <section className="h-auto mt-32 w-4/6 mx-auto">
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
