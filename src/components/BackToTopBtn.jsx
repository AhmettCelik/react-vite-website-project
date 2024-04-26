import React, { useEffect, useState } from "react";

const BackToTopBtn = ({ padding, textSize }) => {
  const [btnDisplay, setBtnDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setBtnDisplay(true);
      } else {
        setBtnDisplay(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section>
      <button
        id="scrollToTopBtn"
        className={`bg-[#b3002d] text-white rounded ${
          btnDisplay && "show"
        } ${textSize}`}
        onClick={goToTop}
        style={{
          padding: `${padding.paddingY} ${padding.paddingX}`,
        }}
      >
        Get a Quote
      </button>
    </section>
  );
};

export default BackToTopBtn;
