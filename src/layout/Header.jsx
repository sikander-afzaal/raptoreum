import { useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <header className="wrapper  bg-[rgba(24,24,24,1)] border-b border-solid px-5 2xl:px-[60px] border-[#858585] fixed z-50 top-0 left-0">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="bg-black bg-opacity-70 z-[90] fixed top-0 left-0 lg:hidden block w-full h-full"
        ></div>
      )}
      <div className="flex justify-between items-center gap-5 h-[88px] w-full">
        <nav
          className={`lg:static fixed top-0 ${
            headerToggle ? "left-0" : "-left-full"
          } flex justify-start lg:justify-center items-center sm:items-end lg:items-center gap-10 2xl:gap-[60px]
          px-[3rem] pt-[6rem] pb-[3rem] w-full sm:max-w-[450px] h-full bg-[#181818] overflow-y-auto lg:p-0 lg:w-auto z-[95] lg:max-w-none lg:h-auto lg:bg-transparent lg:overflow-visible transition-all duration-700 lg:flex-row flex-col
          `}
        >
          <a
            onClick={() => setHeaderToggle(false)}
            href="https://app.uniswap.org/#/swap?outputCurrency=0xec9efb3e620c953f2fff0bf0bea2500c676283db"
            target="blank"
            className="font-bold text-white text-lg 2xl:text-2xl uppercase"
          >
            How to buy
          </a>

          <a
            onClick={() => setHeaderToggle(false)}
            href="#tokenomics"
            className="font-bold text-white text-lg 2xl:text-2xl uppercase"
          >
            Litepaper
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#tokenomics"
            className="font-bold text-white text-lg 2xl:text-2xl uppercase"
          >
            tokenomics
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#tokenomics"
            className="font-bold text-white text-lg 2xl:text-2xl uppercase"
          >
            Faq
          </a>
        </nav>
        <button
          onClick={() => setHeaderToggle((prev) => !prev)}
          className="relative z-[100] lg:hidden block text-white"
        >
          {headerToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          )}
        </button>
        <div className="flex justify-center items-center gap-5">
          <div className="flex justify-center items-center gap-3">
            <a href="" target="blank">
              <img
                src="/telegram.png"
                className="object-contain w-[38px]"
                alt=""
              />
            </a>
            <a href="" target="blank">
              <img
                src="/twitter.png"
                className="object-contain w-[38px]"
                alt=""
              />
            </a>
          </div>
          <button className="bg-primary text-white rounded-full border border-solid border-[#458ff4]  font-comic  px-6 py-2  text-base font-bold">
            Buy Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
