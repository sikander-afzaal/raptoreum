const Hero = () => {
  return (
    <section className="wrapper     xl:h-screen py-[140px] xl:py-0 xl:min-h-[850px]">
      <div className="contain xl:flex-row flex-col justify-between h-full items-center xl:gap-10">
        <div className="flex xl:mb-0 -mb-[20px] sm:-mb-[130px] lg:-mb-10  max-w-[708px] justify-start items-center text-center xl:text-left xl:items-start flex-col gap-3">
          <h3 className="leading-[1.2] uppercase text-white text-[35px] sm:text-[50px] 2xl:text-[70px] font-normal">
            <span className="bg-primary bg-clip-text text-transparent">
              Raptoreum
            </span>{" "}
            <br />
            Legend is Here
          </h3>
          <p className="font-poppins text-white text-lg 2xl:text-xl">
            Raptoreum popped out in 2007 and rolled up in 2023 to show us what
            real meme history is all about.
          </p>
          <button className="bg-primary text-white rounded-full border border-solid border-[#458ff4]  font-comic mt-4  w-full max-w-[385px] h-[54px]  text-lg uppercase font-bold">
            Buy raptoreum now
          </button>
        </div>
        <div className="relative isolate w-full sm:w-[640px] lg:w-full lg:scale-100 sm:scale-75 lg:min-w-[750px] 2xl:max-w-[850px] flex justify-center items-center">
          <img src="/hero.png" className="w-full max-w-[950px]" alt="" />
          <div className="flex sm:scale-100 scale-[0.6] absolute left-[12%] bottom-[40%] md:bottom-[34%] z-20 justify-between items-center w-full max-w-[300px] rounded-[20px] bg-hero backdrop-blur-[50px] shadow-hero p-5">
            <p className="text-white font-comic text-base font-normal">
              BlockChain: <br />{" "}
              <span className="font-sans text-[28px] leading-[1]">ETH</span>
            </p>
            <p className="text-base font-comic text-white text-center">
              Tax Buy/Sell <br />{" "}
              <span className="text-2xl font-sans">0% / 0%</span>
            </p>
          </div>
          <div className="flex sm:scale-100 scale-[0.6] absolute right-0 md:right-[20%] bottom-[17%] gap-5 z-20 justify-center items-center w-full max-w-[340px] rounded-[20px] bg-hero backdrop-blur-[50px] shadow-hero p-5">
            <p className="text-white text-center font-comic text-lg font-normal">
              <span className="font-sans text-[40px] leading-[1]">17</span>{" "}
              <br />
              Hours:{" "}
            </p>
            <p className="font-normal text-[28px] text-white">:</p>
            <p className="text-white text-center font-comic text-lg font-normal">
              <span className="font-sans text-[40px] leading-[1]">17</span>{" "}
              <br />
              Minutes:{" "}
            </p>
            <p className="font-normal text-[28px] text-white">:</p>
            <p className="text-white text-center font-comic text-lg font-normal">
              <span className="font-sans text-[40px] leading-[1]">17</span>{" "}
              <br />
              Seconds:{" "}
            </p>
          </div>
          <div className="flex sm:scale-100 scale-[0.6] absolute left-0 md:left-[10%] bottom-0 sm:bottom-[15%]  z-20 justify-center items-center w-full max-w-[165px] rounded-[20px] bg-hero backdrop-blur-[50px] shadow-hero p-5">
            <p className="text-white text-left font-comic text-base font-normal">
              <span className="font-sans text-[24px] leading-[1]">
                Fair launch
              </span>{" "}
              <br />
              Start In{" "}
            </p>
          </div>
          <button className="flex sm:scale-100 scale-[0.6] absolute right-[20%] top-[15%]  z-20 justify-center items-center w-full max-w-[160px] rounded-[20px] bg-hero backdrop-blur-[50px] shadow-hero p-5">
            <p className="text-white text-center font-normal">
              <span className="font-sans uppercase text-[24px] leading-[1]">
                buy NOW!
              </span>{" "}
              <br />
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
