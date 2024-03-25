import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { FaTwitter, FaTelegram } from "react-icons/fa";

function Navbar() {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  return (
    <nav className="  py-4  ">
      <div className="container-wrapper flex items-center justify-center relative">

        <a href="https://solscan.io/token/8EX8dPYuK1gN5BTKJGPRRe1AXDg1G2AveTzJY6FYYxkr" target="_blank" className=" text-xs sm:text-xl font-bold text-center">
        CA: 8EX8dPYuK1gN5BTKJGPRRe1AXDg1G2AveTzJY6FYYxkr
        </a>
       
      

      </div>
    </nav>
  );
}

export default Navbar;
