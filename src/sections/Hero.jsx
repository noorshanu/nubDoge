import { FaTwitter, FaTelegram } from "react-icons/fa";

function Hero() {
  return (
    <section className=" pt-0  pb-[4rem]">
      <div className="container-wrapper flex justify-center flex-col ">
        <h1 className=" font-kid text-[120px] sm:text-[220px] font-bold text-center">
          NubDoge
        </h1>

        <div className=" flex justify-center gap-5 items-center">
          <a
            href="/"
            className=" bg-[#b6d9ff] rounded-full px-4 py-2 text-xl font-semibold "
          >
            Twitter
          </a>

          <a
            href="/"
            className=" bg-[#b6d9ff] rounded-full px-4 py-2 text-xl font-semibold "
          >
            DexTools
          </a>

          <a
            href="/"
            className=" bg-[#b6d9ff] rounded-full px-4 py-2 text-xl font-semibold "
          >
            Telegram
          </a>
        </div>
        <div className=" flex justify-center mx-auto">
          <img
            src="images/hero.png"
            alt=""
            className="w-auto h-64    lg:h-[500px] 2xl:h-[550px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
