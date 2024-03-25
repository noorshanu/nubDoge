import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 relative  pt-[12%] ">

        <img src="images/about.png" alt="" className=" absolute top-2 h-[300px] left-4 floating " />
      
     

        <div className="  px-4  py-6 border-4 bg-[#1995d0] text-white text-center border-[#000000] relative z-50 rounded-2xl  ">

          <h1 className="text-5xl font-bold text-center my-3">MyroWif you are great</h1>



          <h1 className=" font-sushi-two text-3xl font-bold text-white my-3">MyroWif Turning crypto into a jungle gym of giggles</h1>


          <p className=" text-2xl py-6 px-4">
          Think of MyroWIF as the tail-wagging heart of the Solana blockchain. We're not just another coin; we're a movement fueled by the love for our four-legged friend and the passion for making Solana even more pawsome. 🐶
          </p>

          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/4YDdnThR62DgPrD22iWQSWLyrvZoou2Q4e64F56upovE?t=1711352110529"
            target="_blank"
            className="text-base py-2 uppercase font-sushi-two px-10 rounded-xl bg-[#363636] shadow-lg shadow-black/40 text-white  font-bold  border-[#f45a7c] border-2 my-2"
          >
            DEXTOOLS
          </a>
        </div>
      </div>
    </>
  );
};

export default Intro;
