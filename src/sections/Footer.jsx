import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full pb-8 relative z-10 ">
      <img src="images/foot.png" alt=""  className=" mx-auto" />
      <div className="container-wrapper mt-8 ">
        <p className="   mx-auto mb-2 lg:mb-3 text-xl sm:text-2xl  ">
          Legal Disclaimer: $NUBDOGE is a meme coin, designed purely for
          entertainment and possesses no inherent value or promise of financial
          gain. By acquiring $NUBDOGE, you acknowledge understanding this
          disclaimer, agreeing to its terms that highlight its nature as utterly
          futile for any investment purposes.
        </p>
        <div className="">
          <h2 className=" text-6xl font-kid text-center font-bold">
            NUBDOGE
          </h2>
          <div className=" flex items-center justify-center gap-2">
            <p className="mt-3 text-xs text-black lg:text-sm font-nubFont">
            Copyright © 2024 nubDoge
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
