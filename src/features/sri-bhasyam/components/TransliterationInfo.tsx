import { RootState } from "@/app/store"
import { useSelector } from "react-redux"
import { selectLanguage } from "../redux/languageSlice"

const transliteration = {
  kannada: "kannada",
  roman: "english",
  telugu: "telugu",
  tamil: "tamil",
}

export default function TransliterationInfo() {
  const language = useSelector((state: RootState) => selectLanguage(state))

  return (
    <div className="bg-secondary font-semibold p-4 [&>*]:p-4 rounded-md h-[300px] overflow-y-scroll overflow-x-auto shadow-md">
      <p>
        {language === "kannada" && transliteration.kannada}
        {language === "roman" && transliteration.roman}
        {language === "telugu" && transliteration.telugu}
        {language === "tamil" && transliteration.tamil}
      </p>
    </div>
  )
}
