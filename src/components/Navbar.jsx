import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { FaTwitter, FaTelegram } from "react-icons/fa";

function Navbar() {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  return (
    <nav className="  py-4  ">
      <div className="container-wrapper flex items-center justify-center relative">

        <h1 className=" text-xs sm:text-xl font-bold text-center">
        CA: GtDZKAqvMZMnti46ZewMiXCa4oXF4bZxwQPoKzXPFxZn
        </h1>
       
      

      </div>
    </nav>
  );
}

export default Navbar;
