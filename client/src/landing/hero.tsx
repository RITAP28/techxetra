// import { ShootingStars } from '../../components/shootingStars';
import { useNavigate } from "react-router-dom";
import { StarsBackground } from "../../components/starsBackground";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
        <StarsBackground
          starDensity={0.0003}
          allStarsTwinkle
          twinkleProbability={0.9}
          minTwinkleSpeed={0.6}
          maxTwinkleSpeed={1.2}
          className="absolute"
        />
        {/* <ShootingStars /> */}
        <div className="w-full h-[5rem] flex flex-row justify-between text-white">
          <div className="pl-4 pt-4">TechXetra</div>
          <div className="pr-4 pt-4">
            <button
              type="button"
              className="hover:cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
