import About from "./About";
import Brands from "./Brands";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Steps from "./Steps";
import Tokenomics from "./Tokenomics";

const Home = () => {
  return (
    <div className="overflow-hidden  relative isolate">
      <div className="absolute left-0 top-0 -z-10 bg-[#141943] w-full h-full"></div>
      <div className="w-full relative">
        <img
          src="/bg.png"
          className="mix-blend-multiply w-full absolute left-0 top-0 object-cover h-full -z-10"
          alt=""
        />
        <Hero />
        <Brands />
      </div>
      <About />
      <Steps />
      <Tokenomics />
      <Roadmap />
    </div>
  );
};

export default Home;
