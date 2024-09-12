import Hero from "../landing/hero";

const Landing = () => {
  return (
    <div className="w-full min-h-[200vh]">
      <div className="w-full max-h-[200vh] bg-gradient-to-b from-[#000000] via-[#220135] to-[#020b22]">
        <Hero />
      </div>
    </div>
  );
};

export default Landing;
