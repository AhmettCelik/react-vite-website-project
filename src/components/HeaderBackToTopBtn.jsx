import React, { useEffect, useState } from "react";

function HeaderBackToTopBtn() {
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
        className={`bg-[#b3002d] text-white py-2 px-4 rounded ${
          btnDisplay && "show"
        }`}
        onClick={goToTop}
      >
        Get a Quote
      </button>
    </section>
  );
}

export default HeaderBackToTopBtn;
