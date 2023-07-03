const About = () => {
  return (
    <section className="relative wrapper pt-[50px] sm:pt-[100px] lg:pt-[160px]">
      <div className="bg-[#2810BB4D] rounded-full absolute bottom-0 left-0 w-full max-w-[2500px] h-[950px] rotate-[-5deg] blur-[400px] -z-10"></div>
      <img
        src="/bg.png"
        className="mix-blend-multiply w-full absolute left-0 top-0 object-cover h-full -z-10"
        alt=""
      />
      <div className="contain lg:flex-row flex-col justify-between items-center gap-10 bg-about shadow-about border-[1.5px] rounded-[48px] p-6 md:p-10 border-solid border-slate-300">
        <div className="flex justify-start w-full max-w-[830px] items-start flex-col gap-3">
          <h3 className="leading-[1.2] uppercase bg-primary bg-clip-text text-transparent text-[30px] sm:text-[45px] md:text-[60px] 2xl:text-[64px] font-normal">
            ABOUT Philosoraptor
          </h3>
          <p className="font-comic text-base sm:text-lg text-white">
            Raptoreum, a legendary detective in the world of blockchain,
            specializes in solving intricate cases. With unparalleled expertise,
            Raptoreum uncovers fraudulent activities, ensuring the integrity of
            the blockchain network. Their meticulous analysis and relentless
            pursuit of truth have led to the exposure of complex schemes and the
            prosecution of wrongdoers. Raptoreum's reputation as a trusted
            investigator has made them an invaluable asset in maintaining
            transparency and security within the blockchain ecosystem.
          </p>
        </div>
        <img
          src="/about.png"
          className="w-full max-w-[400px] 2xl:max-w-[500px] object-contain"
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
