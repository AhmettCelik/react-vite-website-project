import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import BackToTopBtn from "./BackToTopBtn";

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
  return (
    <header>
      <section
        id="header-first-section"
        className="w-full bg-white fixed z-50 top-0"
      >
        <div className="flex flex-row justify-between items-center w-70 mx-auto h-16">
          <div className="flex items-center justify-between w-6/12">
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
            <section className="mr-8">
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
          <section className="ml-40">
            <BackToTopBtn padding={{ paddingY: "0.5rem", paddingX: "1rem" }} />
          </section>
          <div className="flex items-center justify-between w-[23%]">
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
        <div className="w-70 mx-auto h-12 flex items-center">
          <nav className="w-5/12">
            <ul className="text-white text-lg w-full flex justify-between">
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
