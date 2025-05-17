import BgImg from "@/assets/images/second_page/background.jpg";
import centerText from "@/assets/images/second_page/sri_ramanujacarya.png";
import leftText from "@/assets/images/second_page/sri_vedanta_desika.png";
import rightText from "@/assets/images/second_page/sri_varavaramuni.png";
import PressBtn from "@/assets/images/second_page/explore_button.png";
import { Link } from "react-router-dom";

export default function SecondView() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-no-repeat bg-top"
      style={{
        backgroundImage: `url(${BgImg})`,
      }}
    >
      {/* Center Image */}
      <img
        src={centerText}
        className="absolute top-[0vh] left-1/2 transform -translate-x-1/2 h-[30vh] md:h-[35vh] lg:h-[40vh] xl:h-[52vh] 2xl:h-[50vh] max-w-[80vw] object-contain z-10"
        alt="Center Text"
      />

      {/* Explore Button - Center */}
      <div className="absolute top-[53%] left-[45.5%] z-10">
        <a
          href="https://test2.samskritifoundation.org/ramanujacharya"
          target="_blank"
        >
          <img src={PressBtn} alt="Enter Button 2" />
        </a>
      </div>

      {/* Left Image */}
      <img
        src={leftText}
        className="absolute bottom-[14%] left-[9%] h-[25vh] md:h-[30vh] lg:h-[35vh] xl:h-[52vh] 2xl:h-[45vh] max-w-[40vw] object-contain z-10"
        alt="Left Text"
      />

      {/* Explore Button - Left */}
      <div className="absolute bottom-[8%] left-[18%] z-10">
        <a
          href="https://test2.samskritifoundation.org/vedantadesika/"
          target="_blank"
        >
          <img src={PressBtn} alt="Enter Button 2" />
        </a>
      </div>

      {/* Right Image */}
      <img
        src={rightText}
        className="absolute bottom-[14%] right-[9%] h-[25vh] md:h-[30vh] lg:h-[35vh] xl:h-[52vh] 2xl:h-[45vh] max-w-[40vw] object-contain z-10"
        alt="Right Text"
      />

      {/* Explore Button - Right */}
      <div className="absolute bottom-[8%] right-[17%] z-10">
    {/* <a
          href="https://niteshsf.github.io/ramanujacharya-portal/varavaramuni"
          target="_blank"
        >
          <img src={PressBtn} alt="Enter Button 2" />
        </a> */}

        <Link to="/varavaramuni">
          <img src={PressBtn} alt="Enter Button 2" />
        </Link>
      </div>
    </div>
  );
}
