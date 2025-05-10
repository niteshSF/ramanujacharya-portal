import videoFile from "@/assets/images/vid.mp4";
import EnterBtn from "@/assets/images/first_page/enter.png"

export default function FrontPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        muted={false}
        loop
        playsInline
        className="fixed top-0 left-0 w-screen h-screen object-fill z-0"
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute h-full flex justify-center items-center top-20 right-[15vw] z-[90] opacity-0">
        <a
          href="/ramanujacharya/second"
        >
          <img src={EnterBtn} alt="Enter Button 2" />
        </a>
      </div>
    </div>
  );
}
