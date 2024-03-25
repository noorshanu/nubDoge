import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

import Intro from "./sections/Intro";
import MemeMark from "./sections/MemeMark";
import Partner from "./sections/Partner";
import MemeCards from "./sections/MemeCards";
import Footer from "./sections/Footer";
import RoadMap from "./sections/RoadMap";
import Photo from "./sections/Photo";

function AppLayout() {
  return (
    <>
      <main className="  ">
        <Navbar />

        <Hero />
      </main>
      <div className="  pt-4  mb-[25%]  relative  no-scrollbar ">
      
      <div className="  z-20  py-2 overflow-hidden no-scrollbar overflow-y-scroll">
        <MemeMark />
        </div>
        <img src="images/vfd.png" alt=""  className=" w-full overflow-hidden absolute top-2 sm:top-0"/>

       
      </div>

      <div>
        <dl className="h-[50px]" />
        <Intro />
        <dl className="h-[50px]" />
        {/* <div>
          <Photo/>
        </div> */}
        {/* <div className=" bg-[#ffffff]">
        <MemeCards />
        </div> */}
        {/* <div>
          <RoadMap/>
        </div> */}
        {/* <div>
          <Partner />
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
