const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="wrapper mt-[50px] sm:mt-[100px] lg:mt-[160px]"
    >
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
