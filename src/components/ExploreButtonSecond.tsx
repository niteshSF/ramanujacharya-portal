import PressBtn from "@/assets/images/second_page/explore_button.png";

export default function ExploreButtonSecond() {

  return (
    <div className="relative left-11">
      <img
        src={PressBtn}
        onClick={() => {
          window.location.href = "http://localhost:5175/"; // Redirect to a different port
        }}
        className="cursor-pointer"
      />
    </div>
  );
}
