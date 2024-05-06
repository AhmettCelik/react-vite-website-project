import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import BackToTopBtn, { StraightBackToTopBtn } from "./BackToTopBtn";

const Links = ({ className, to, content }) => {
  return (
    <li>
      <Link to={to} className={className}>
        {content}
      </Link>
    </li>
  );
};

const Header = () => {
  const [displayOfDropDownSection, setDisplayOfDropDownSection] =
    useState(false);

  const handleHeaderExtendButtonClick = () => {
    setDisplayOfDropDownSection((prevState) => !prevState);
  };

  return (
    <header>
      <section
        id="header-first-section"
        className="w-full bg-white fixed z-50 top-0 mobileM:w-full"
      >
        <div className="flex justify-between items-center w-70 tablet:w-full mx-auto h-16 tablet:justify-center">
          <div className="flex items-center justify-between w-6/12 tablet:w-11/12 mobileM:mx-0">
            <section>
              <Link
                to="/"
                className="flex font-varela items-center font-normal text-sm"
              >
                <img
                  src={logo}
                  alt="logo"
                  id="logo"
                  className="max-w-12 max-h-12"
                />
                <h1 className="text-4xl font-bold ml-1">wimple</h1>
                <div className="ml-1">
                  <p className="relative top-1">auto</p>
                  <p className="relative bottom-1">transport</p>
                </div>
              </Link>
            </section>

            {/*Mobile header button*/}
            <section className="min-tablet:hidden">
              <button onClick={handleHeaderExtendButtonClick}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </section>
            <section className="mr-8 tablet:hidden">
              <nav>
                <ul className="flex text-lg">
                  <Links to="/aboutus" className="mr-8" content="About Us" />
                  <Links
                    to="/whywimple"
                    className="mr-8"
                    content="Why Wimple?"
                  />
                  <Links to="/solutions" className="mr-8" content="Solutions" />
                </ul>
              </nav>
            </section>
          </div>
          {/*Mobile first header dropdown section*/}
          <section
            className={`min-tablet:hidden fixed w-full top-[4rem] h-48 bg-white flex flex-col text-center justify-around ${
              displayOfDropDownSection ? "block" : "hidden"
            }`}
          >
            <hr className="w-[85%] mx-auto" />
            <nav className="h-[60%]">
              <ul className="flex flex-col justify-around text-md font-normal h-full">
                <Links to="/aboutus" content="About Us" />
                <Links to="/whywimple" content="Why Wimple?" />
                <Links to="/solutions" content="Solutions" />
              </ul>
            </nav>

            <div className="flex ft-center gap-4">
              <a className="text-md font-normal" href="">
                (888) 491-7162
              </a>
              <section>
                <StraightBackToTopBtn />
              </section>
            </div>
          </section>
          {/*Mobile first header dropdown section*/}
          <section className="ml-40 tablet:hidden">
            <BackToTopBtn padding={{ paddingY: "0.5rem", paddingX: "2rem" }} />
          </section>
          <div className="flex items-center justify-end w-[23%] tablet:hidden">
            <section className="mr-6 text-lg">
              <a className="mr-2" href="">
                (888) 491-7162
              </a>
              <FontAwesomeIcon icon={faHeadset} size="xl" />
            </section>
          </div>
        </div>
      </section>
      <section
        id="header-second-section"
        className="w-full bg-[#b3002d] z-10 relative top-16"
      >
        <div className="w-70 tablet:w-full mx-auto h-12 tablet:h-8 flex items-center">
          <nav className="w-5/12 tablet:w-full">
            <ul className="text-white text-lg tablet:text-[0.8rem] mobileM:text-[0.7rem] w-full flex justify-between tablet:justify-around">
              <Links to="/comparequotes" content="Compare Quotes" />
              <Links to="/helpcenter" content="Help Center" />
              <Links to="/trackshipment" content="Track a Shipment" />
              <Links to="/calculator" content="Calculator" />
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
