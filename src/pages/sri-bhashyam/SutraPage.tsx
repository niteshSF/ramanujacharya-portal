import BaseLayout from "@/layouts/BaseLayout"
import Design from "@/assets/images/design.png"
import SutraInfo from "@/features/sri-bhasyam/components/SutraInfo"
import TransliterationInfo from "@/features/sri-bhasyam/components/TransliterationInfo"
import MeaningInfo from "@/features/sri-bhasyam/components/MeaningInfo"
import Toolbar from "@/features/sri-bhasyam/components/Toolbar"

export default function InfoPage() {
  return (
    <BaseLayout>
      <div className="max-w-7xl mx-auto p-2 mt-4">
        <div className="flex flex-col items-center gap-2 p-4">
          <h3 className="text-xl font-semibold">
            श्रीभगवद्र्मानुजाचार्य विरचितं
          </h3>
          <h1 className="text-4xl text-red-500 font-bold">श्रीभाष्यम्</h1>
          <img src={Design} width="120px" height="40px" />
        </div>
        <SutraInfo />
        <div className="mt-8">
          <Toolbar />
        </div>
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
      </div>
    </BaseLayout>
  )
}
