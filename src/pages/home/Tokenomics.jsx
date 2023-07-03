const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="wrapper relative pt-[50px] sm:pt-[100px] lg:pt-[160px]"
    >
      <div className="bg-[#0500FF1A] rounded-full absolute top-0 left-0 w-full max-w-[1800px] h-[1500px] rotate-[-47deg] blur-[400px] -z-10"></div>
      <img
        src="/bg.png"
        className="mix-blend-multiply w-full absolute left-0 top-0 object-cover h-full -z-10"
        alt=""
      />
      <div className="contain justify-start items-center flex-col gap-12">
        <h2 className="text-white font-normal text-[55px] md:text-[72px] uppercase">
          Tokenomic
        </h2>
        <img
          src="/chart.png"
          className="w-full max-w-[1200px] object-contain"
          alt=""
        />
        <div className="flex justify-center lg:flex-row flex-col items-center gap-4 lg:gap-7">
          <p className="text-xl sm:text-[28px] md:text-[36px] font-comic text-white font-bold">
            Token symbol: <span className="text-main">$RAPTOR</span>
          </p>
          <p className="text-xl sm:text-[28px] md:text-[36px] font-comic text-white font-bold">
            Total Supply: <span className="text-main">10,000,000,000,000</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
