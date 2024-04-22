import React from "react";
import bbbLogo from "../images/bbb.png";
import fmcsaLogo from "../images/fmcsa.png";

const Anchor = ({ href, content }) => {
  return (
    <li className="list-none mb-4 font-normal hover:underline opacity-60">
      <a href={href}>{content}</a>
    </li>
  );
};

const FooterH4 = (props) => {
  return (
    <h4 className="font-bold text-xl relative bottom-6">{props.content}</h4>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#dbdbdb] h-[406px] w-full bottom-0">
      <div className="w-3/6 h-full mx-auto">
        <section className="flex items-end w-full h-[304px]">
          <div className="flex justify-between items-start w-full h-3/4">
            <div>
              <FooterH4 content="Navigation" />
              <Anchor href="/aboutus" content="About Us" />
              <Anchor href="/whywimple" content="Why Wimple" />
              <Anchor href="/solutions" content="Solutions" />
              <Anchor href="/calculator" content="Calculator" />
            </div>
            <div>
              <FooterH4 content="Support" />
              <Anchor href="/helpcenter" content="Help Center" />
              <Anchor href="trackshipment" content="Track a Shipment" />
            </div>
            <div>
              <FooterH4 content="Wimple Auto Transport" />
              <a
                href="https://www.google.com/maps/place/2911+Turtle+Creek+Blvd+Ste.+300a,+Dallas,+TX+75219,+USA/@32.8042753,-96.8060315,17z/data=!3m1!4b1!4m6!3m5!1s0x864e9eccd3976b93:0x9f3e59f61024dae!8m2!3d32.8042753!4d-96.8060315!16s%2Fg%2F11qpmywf6p?entry=ttu"
                className="flex flex-col mb-4 font-normal hover:underline opacity-60"
              >
                <p>2911 Turtle Creek Blvd STE 300 </p>
                <p>Dallas, TX 75219</p>
              </a>
              <Anchor href="tel:+8884917162" content="(888) 491-7162" />
              <Anchor href="#" content="DOT: 4089002" />
              <Anchor href="#" content="MC: 1557261" />
            </div>
          </div>
        </section>
        <div className="h-6px">
          <hr className="mb-[1px] opacity-60" />
          <hr />
        </div>
        <section className="flex justify-between items-center w-full h-[76px]">
          <div className="h-full flex items-center w-[44%] ml-3 font-normal opacity-50">
            <p className="flex justify-center flex-wrap relative top-3">
              <span className="opacity-60">
                Copyright © 2024 <span className="invisible">.</span>
              </span>
              <a
                href="https://wimplesolutions.com/"
                className=" mb-4 opacity-60"
              >
                by Wimple Auto Transport
              </a>{" "}
              <span className="opacity-60">. All Rights</span>
              <span className="relative bottom-[17px] opacity-60">
                Reserved.
              </span>
            </p>
          </div>
          <div className="h-full justify-center font-normal flex w-[27%] relative top-5 left-5 opacity-50">
            <a href="https://wimplesolutions.com/" className="opacity-60">
              Privacy Policy
            </a>
            <span className="opacity-60">|</span>
            <a
              href="/termsandconditions"
              className="flex flex-wrap h-full w-[50%] opacity-60"
            >
              <span>Terms & </span>
              <span className="relative bottom-4 right-16">Conditions</span>
            </a>
          </div>
          <div className="flex items-center relative right-6">
            <img
              src={fmcsaLogo}
              alt="federal motor carrier safety administration logo"
              className="max-w-12 max-h-12 relative right-5"
            />
            <a href="https://www.bbb.org/us/tx/dallas/profile/freight-broker/wimple-llc-0875-91341115/customer-reviews">
              <img
                src={bbbLogo}
                alt="better business bureau logo"
                className="max-w-32 max-h-32"
              />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
