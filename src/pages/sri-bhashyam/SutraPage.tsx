import BaseLayout from "@/layouts/BaseLayout"
import Design from "@/assets/images/design.png"
import SutraInfo from "@/features/sri-bhasyam/components/SutraInfo"
import TransliterationInfo from "@/features/sri-bhasyam/components/TransliterationInfo"
import MeaningInfo from "@/features/sri-bhasyam/components/MeaningInfo"
import Toolbar from "@/features/sri-bhasyam/components/Toolbar"
import { useSelector } from "react-redux"
import { selectvideoPlaying } from "@/features/sri-bhasyam/redux/videoPlaying"
import PathBreadcrumb from "@/features/sri-bhasyam/components/PathBreadcrumb"

export default function InfoPage() {
  const isVideoPlaying = useSelector(selectvideoPlaying)

  return (
    <BaseLayout>
      <div className="max-w-7xl mx-auto p-2 mt-4">
        <div className="flex flex-col items-center gap-2 p-4">
          <h3 className="text-xl font-semibold">
            श्रीभगवद्र्मानुजाचार्य विरचितं
          </h3>
          <h1 className="text-4xl text-red-500 font-bold">श्रीभाष्यम्</h1>
          <img src={Design} width="120px" height="40px" />
          <PathBreadcrumb/>
        </div>
        <SutraInfo />
        <div className="mt-8">
          <Toolbar />
        </div>
        {!isVideoPlaying ? (
          <>
            <div className="mt-8">
              <h2 className="py-2 text-red-500 font-bold text-2xl">
                Transliteration
              </h2>
              <TransliterationInfo />
            </div>
            <div className="my-8">
              <h2 className="py-2 text-red-500 font-bold text-2xl">Meaning</h2>
              <MeaningInfo />
            </div>
          </>
        ) : (
          <iframe
            className="w-full lg:w-[90%] h-[600px] p-4 mx-auto my-8"
            src="https://www.youtube.com/embed/LVhHTAKnFsc"
          />
        )}
      </div>
    </BaseLayout>
  )
}
