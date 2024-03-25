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
      <div className="  py-4  mb-2 relative  ">
      

        <img src="images/vfd.png" alt=""  className=" w-full"/>

        <div className=" absolute top-[35px] z-20 bg-[#427ab682] py-2">
        <MemeMark />
        </div>
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
