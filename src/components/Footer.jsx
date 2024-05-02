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
    <h4 className="font-bold text-xl relative bottom-6 tablet:mb-[-1rem]">
      {props.content}
    </h4>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#dbdbdb] h-auto w-full bottom-0">
      <div className="w-3/6 tablet:w-10/12 h-full flex flex-col justify-between mx-auto">
        <section className="flex items-end w-full min-h-[33vh] tablet:min-h-auto mb-10">
          <div className="flex justify-between items-start w-full h-3/4 tablet:h-[70vh] tablet:mt-16 tablet:flex-col tablet:justify-around">
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
              <Anchor href="/trackshipment" content="Track a Shipment" />
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
          <hr className="opacity-20 bg-white h-[4px] w-full" />
        </div>
        <section className="flex w-full h-auto tablet:flex-col tablet:items-center tablet:justify-around tablet:gap-4 tablet:mt-4 tablet:mb-4">
          <div className="flex ft-center basis-2/4 h-20 font-normal opacity-35">
            <p>
              Copyright © 2024 <a href="/"> by Wimple Auto Transport</a>. All
              Rights Reserved.
            </p>
          </div>
          <div className="flex ft-center basis-1/4 h-20 font-normal opacity-35">
            <p>
              <a href="/">Privacy Policy</a>
              <span> | </span>
              <a href="/termsandconditions">Terms & Conditions</a>
            </p>
          </div>
          <div className="flex f-center basis-1/4 h-20">
            <img
              src={fmcsaLogo}
              alt="federal motor carrier safety administration logo"
              className="w-auto h-11"
            />
            <a href="https://www.bbb.org/us/tx/dallas/profile/freight-broker/wimple-llc-0875-91341115/customer-reviews">
              <img
                src={bbbLogo}
                alt="better business bureau logo"
                className="w-auto h-14 ml-5"
              />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
