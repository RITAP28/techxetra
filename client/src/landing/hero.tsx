// import { ShootingStars } from '../../components/shootingStars';
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import { StarsBackground } from "../../components/starsBackground";
import {ShootingStars} from '../../components/shootingStars'
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
    <div className="flex justify-center items-center ">
      <div ref={starsBg} className="w-full  h-[200vh] overflow-hidden flex flex-col items-center">
        <StarsBackground
          starDensity={0.0004}
          allStarsTwinkle
          twinkleProbability={1}
          minTwinkleSpeed={0.6}
          maxTwinkleSpeed={1.2}
          className="absolute"
        />
        <ShootingStars/>
        <div className="w-full h-[5rem] flex justify-between  text-white">
          <div className="pl-20 mt-12">
            <img src="./final text-Photoroom.png" width={200} alt="" />
          </div>

          <div className="pr-14 pt-12">
            <button
              ref={btnRef}
              type="button"
              onClick={() => {
                navigate("/login");
              }}
            >
              <h1 className="font-originTech text-3xl pt-9 pr-10">Login</h1>
            </button>
          </div>
        </div>
        <div className="mt-44 text-6xl font-autoTechno">
          <h1 className="bg-gradient-to-r from-[#FFFFFF] via-[#E12198]/[77%] to-[#FFFFFF] bg-clip-text text-transparent text-center leading-[100px]">REVIVING THE LEGACY <br /><span className="text-5xl">INSPIRING INNOVATION</span> </h1>
        </div>
        <img src="./planet.png" width={800}  alt="" className="mt-[400px] absolute"/>
      </div>
    </div>
  );
};

export default Hero;
