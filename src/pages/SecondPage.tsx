import { useEffect, useRef } from "react";
import BgImg from "@/assets/images/second_page/background.jpg";
import LandingAudio from "@/assets/audio/landing_audio.m4a";
import centerText from "@/assets/images/second_page/sri_ramanujacarya.png";
import leftText from "@/assets/images/second_page/sri_vedanta_desika.png";
import rightText from "@/assets/images/second_page/sri_varavaramuni.png";
import ExploreButton from "@/components/ExploreButton";
import ExploreButtonSecond from "@/components/ExploreButtonSecond";

export default function SecondView() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <div
      className="relative overflow-auto min-h-screen w-full bg-cover"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <audio ref={audioRef} src={LandingAudio} autoPlay />

      {/* Center Image */}
      <img
        src={centerText}
        className="absolute top-[3%] right-[32%] h-[55vh] max-w-[80vw] z-10"
        alt="Center Text"
      />

      {/* Explore Button 1 */}
      <div className="absolute  top-[58%] right-[42%] transform -translate-x-1/2 z-10">
      {/* <div className="absolute top-[58%] left-[50%] transform -translate-x-1/2 z-10"> */}

        <ExploreButton />
      </div>

      {/* Left Image */}
      <img
        src={leftText}
        className="absolute bottom-[12%] left-[11%] h-[55vh] max-w-[70vw] z-10"
        alt="Left Text"
      />
      
      {/* Explore Button 2 */}
      <div className="absolute  bottom-[6%] left-[15%]  z-10">
        <ExploreButtonSecond />
      </div>

      {/* Right Image */}
      <img
        src={rightText}
        className="absolute bottom-[12%] right-[10%] h-[55vh] max-w-[70vw] z-10"
        alt="Right Text"
      />
      
      {/* Explore Button 3 */}
      <div className="fixed bottom-[6%] right-[19%] z-10">
        <ExploreButton />
      </div>
    </div>
  );
}
