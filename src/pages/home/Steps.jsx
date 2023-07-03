import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Steps = () => {
  return (
    <section className="wrapper steps px-5 mt-[70px] sm:mt-[100px] lg:mt-[160px]">
      <Splide
        options={{
          perPage: 3,
          type: "loop",
          perMove: 1,
          focus: "center",
          pagination: false,
          arrows: true,
          width: "100%",
          gap: "20px",
          drag: true,
          breakpoints: {
            1450: {
              perPage: 2,
            },
            910: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          <StepBox
            desc="Download Metamask or your wallet of choice from the app store or google play store for free. For desktop users, download the google chrome extension by going to metamask.io"
            title="Create a Wallet"
            img="/step1.png"
          />
        </SplideSlide>
        <SplideSlide>
          <StepBox
            desc="Have ETH in your wallet to switch to $Rap. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet."
            title="Get Some ETH"
            img="/step2.png"
          />
        </SplideSlide>
        <SplideSlide>
          <StepBox
            desc="Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $Rap token address into Uniswap, select Milady, and confirm. When Metamask prompts you for a wallet signature, sign."
            title="Go to Uniswap"
            img="/step3.png"
          />
        </SplideSlide>
        <SplideSlide>
          <StepBox
            desc="Switch ETH for $Rap. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility."
            title="Switch ETH for $Raptor"
            img="/step4.png"
          />
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default Steps;

const StepBox = ({ img, title, desc }) => {
  return (
    <div className="flex  sm:h-full justify-start items-start flex-col  bg-about backdrop-blur-[25px] rounded-[20px] w-full shadow-about border-solid border-[1.5px] border-slate-300 px-4 py-6 sm:p-4 lg:p-8">
      <img
        src={img}
        className="w-full object-cover h-[300px] sm:h-[400px] rounded-[15px]"
        alt=""
      />
      <h4 className="text-white uppercase mt-6 font-normal text-[28px] lg:text-[30px] 2xl:text-[36px]">
        {title}
      </h4>
      <p className="font-comic text-white text-lg">{desc}</p>
    </div>
  );
};
