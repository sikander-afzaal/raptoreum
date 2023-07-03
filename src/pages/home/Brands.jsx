const Brands = () => {
  return (
    <section className="wrapper -mt-[80px] sm:-mt-[130px] xl:mt-4 2xl:mt-[110px]">
      <div className="contain justify-start items-center flex-col gap-10">
        <div className="grid w-full grid-cols-2 lg:grid-cols-[auto__auto__auto__auto] place-items-center gap-x-10 sm:gap-[100px] xl:gap-x-[160px] gap-y-[40px]">
          <img src="/pink.png" className="object-contain h-[60px]" alt="" />
          <img src="/dex.png" className="object-contain h-[60px]" alt="" />
          <img src="/uni.png" className="object-contain h-[60px]" alt="" />
          <img src="/solid.png" className="object-contain h-[60px]" alt="" />
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-[auto__auto__auto] place-items-center gap-[100px] xl:gap-x-[160px] gap-y-[40px]">
          <img src="/market.png" className="object-contain h-[60px]" alt="" />
          <img src="/coin.png" className="object-contain h-[60px]" alt="" />
          <img src="/tools.png" className="object-contain h-[60px]" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
