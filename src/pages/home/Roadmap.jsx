const Roadmap = () => {
  return (
    <section className="wrapper mt-[50px] sm:mt-[100px] lg:mt-[160px]">
      <div className="contain justify-start items-center flex-col gap-5 md:gap-12">
        <h2 className="text-white font-normal text-[55px] md:text-[72px] uppercase">
          Roadmap
        </h2>
        <div className="grid relative grid-cols-1 gap-8 mid:gap-0 mid:grid-cols-2 w-full max-w-[1200px]">
          <div className="bg-primary  w-1 mid:block hidden absolute left-[50.2%] -translate-x-1/2 top-[20%] h-[65%] "></div>
          <div className="bg-[#ffffff0d] col-start-1 row-start-1 col-span-1 justify-self-start relative  mid:max-w-[510px] border-main border border-solid flex justify-center items-center text-center flex-col gap-4 rounded-[8px] p-6 w-full backdrop-blur-[10px]">
            <p className="text-white text-[25px] sm:text-[30px] 2xl:text-[36px] font-normal">
              Fairlaunch on PinkSale
            </p>
            <p className="text-white text-[25px] sm:text-[30px] 2xl:text-[36px] font-normal">
              Audit, KYC, DOXX Process
            </p>
            <p className="text-white text-[25px] sm:text-[30px] 2xl:text-[36px] font-normal">
              Socials Update
            </p>
            <img
              src="/right.png"
              className="mid:block hidden absolute -right-5 h-[115%] object-contain top-1/2 -translate-y-1/2"
              alt=""
            />
            <img
              src="/left-arr.png"
              className="mid:block hidden absolute left-[105%] w-[60px] object-contain top-1/2 -translate-y-1/2"
              alt=""
            />
            <div className="rounded-full w-6 h-6 bg-[#15BFFD] mid:block hidden absolute left-[116%] top-1/2 -translate-y-1/2"></div>
          </div>
          <div className="bg-[#ffffff0d] col-start-1 mid:col-start-2 row-start-2 col-span-1 justify-self-end relative  mid:max-w-[510px] border-main border border-solid flex justify-center items-center text-center flex-col gap-4 rounded-[8px] p-6 w-full backdrop-blur-[10px]">
            <p className="text-white text-[25px] sm:text-[30px] 2xl:text-[36px] font-normal">
              CMC and CGK Listing
            </p>
            <p className="text-white text-[25px] sm:text-[30px] 2xl:text-[36px] font-normal">
              Marketing Campaign
            </p>
            <img
              src="/left.png"
              className="mid:block hidden absolute -left-5 h-[115%] object-contain top-1/2 -translate-y-1/2"
              alt=""
            />
            <img
              src="/right-arr.png"
              className="mid:block hidden absolute right-[105%] w-[60px] object-contain top-1/2 -translate-y-1/2"
              alt=""
            />
            <div className="rounded-full w-6 h-6 bg-[#15BFFD] mid:block hidden absolute right-[115%] top-1/2 -translate-y-1/2"></div>
          </div>
          <div className="bg-[#ffffff0d] col-start-1 row-start-3 col-span-1 justify-self-start relative  mid:max-w-[510px] border-main border border-solid flex justify-center items-center text-center flex-col gap-4 rounded-[8px] p-6 w-full backdrop-blur-[10px]">
            <p className="text-white text-[25px] sm:text-[30px] 2xl:text-[36px] font-normal">
              Anti-Mev Swap
            </p>
            <p className="text-white text-[25px] sm:text-[30px] 2xl:text-[36px] font-normal">
              Discover
            </p>
            <img
              src="/right.png"
              className="mid:block hidden absolute -right-5 h-[115%] object-contain top-1/2 -translate-y-1/2"
              alt=""
            />
            <img
              src="/left-arr.png"
              className="mid:block hidden absolute left-[105%] w-[60px] object-contain top-1/2 -translate-y-1/2"
              alt=""
            />
            <div className="rounded-full w-6 h-6 bg-[#15BFFD] mid:block hidden absolute left-[116%] top-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
