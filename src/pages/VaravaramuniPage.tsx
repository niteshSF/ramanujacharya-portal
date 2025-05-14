import BgImg from "@/assets/images/varavaramuni/bg-image.png";
import SFLogo from "@/assets/images/varavaramuni/sf-logo.png";
import EnterBtn from "@/assets/images/varavaramuni/enter-btn.png";

const VaravaramuniPage = () => {
  return (
    <div
      className="h-screen w-screen bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "100% 100%",
      }}
    >
      <a
        href="https://samskritifoundation.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={SFLogo}
          className="absolute right-8 top-5 h-[105px] z-100 cursor-pointer"
          alt="SF Logo"
        />
      </a>

      <div className="fixed bottom-[7%] right-[10%] h-[15%] w-[12%]  cursor-pointer">
        <img
          src={EnterBtn}
          //   onClick={() => navigate("/home")}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default VaravaramuniPage;
