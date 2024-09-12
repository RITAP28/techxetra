// import { ShootingStars } from '../../components/shootingStars';
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import { StarsBackground } from "../../components/starsBackground";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const logo = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const starsBg = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(logo.current, {
      y: -5,
      opacity: 0,
      delay: 0.9,
      duration: 0.8,
    });
  }, [logo]);

  useGSAP(() => {
    gsap.from(btnRef.current, {
      y: -5,
      opacity: 0,
      delay: 0.9,
      duration: 0.8,
    });
  }, [btnRef]);

  useGSAP(() => {
    gsap.from(starsBg.current, {
        opacity: 0,
        delay: 0.6,
        duration: 1
    })
  }, [starsBg])

  return (
    <div className="w-full h-full">
      <div ref={starsBg} className="w-full mx-auto h-screen overflow-hidden">
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
          <div className="pl-4 pt-4">
            <p ref={logo}>TechXetra</p>
          </div>
          <div className="pr-4 pt-4">
            <button
              ref={btnRef}
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
