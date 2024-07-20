import { RootState } from "@/app/store"
import { useSelector } from "react-redux"
import { selectLanguage } from "../redux/languageSlice"
import { transliterationSelector } from "@/data/transliteration"
import { selectSutra } from "../redux/sriBhashyamMetaDataSlice"

const formatText = (text: string) => {
  return text.split("\n").map((line) => (
    <>
      {line}
      <br />
    </>
  ))
}

export default function TransliterationInfo() {
  const language = useSelector((state: RootState) => selectLanguage(state))
  const sutra = useSelector((state: RootState) => selectSutra(state))
  const transliteration = transliterationSelector(sutra)

  return (
    <div className="bg-secondary font-semibold px-4 [&>*]:p-4 rounded-md h-[300px] overflow-y-scroll overflow-x-auto shadow-md">
      {transliteration ? (
        <>
          {language === "roman" && (
            <>
              <p>{formatText(transliteration.roman.preSutra)}</p>
              <p className="text-center font-bold text-xl text-red-500">
                {formatText(transliteration.roman.sutra)}
              </p>
              <p>{formatText(transliteration.roman.text)}</p>
            </>
          )}
          {language === "kannada" && (
            <>
              <p>{formatText(transliteration.kannada.preSutra)}</p>
              <p className="text-center font-bold text-xl text-red-500">
                {formatText(transliteration.kannada.sutra)}
              </p>
              <p>{formatText(transliteration.kannada.text)}</p>
            </>
          )}
          {language === "tamil" && (
            <>
              <p>{formatText(transliteration.tamil.preSutra)}</p>
              <p className="text-center font-bold text-xl text-red-500">
                {formatText(transliteration.tamil.sutra)}
              </p>
              <p>{formatText(transliteration.tamil.text)}</p>
            </>
          )}
          {language === "telugu" && (
            <>
              <p>{formatText(transliteration.telugu.preSutra)}</p>
              <p className="text-center font-bold text-xl text-red-500">
                {formatText(transliteration.telugu.sutra)}
              </p>
              <p>{formatText(transliteration.telugu.text)}</p>
            </>
          )}
        </>
      ) : (
        <p>hi</p>
      )}
    </div>
  )
}
