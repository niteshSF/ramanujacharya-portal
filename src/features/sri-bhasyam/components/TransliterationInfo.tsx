import { RootState } from "@/app/store"
import { useSelector } from "react-redux"
import { selectLanguage } from "../redux/languageSlice"
import { selectMetadata } from "../redux/sriBhashyamMetaDataSlice"
import { useGetTransliterationQuery } from "../api/transliterationApiSlice"
import { parseHTML } from "@/lib/utils"

export default function TransliterationInfo() {
  const language = useSelector((state: RootState) => selectLanguage(state))
  const metadata = useSelector((state: RootState) => selectMetadata(state))
  
  const {
    data: transliteration,
    error
  } = useGetTransliterationQuery({
    adhyaya_no: metadata.adhyaya,
    pada_no: metadata.pada,
    adhikarna_no: metadata.adhikarna,
    sutra_no: metadata.sutra,
    lang: language 
  })

  return (
    <div className="bg-secondary font-semibold px-4 [&>*]:p-4 rounded-md h-[300px] overflow-y-scroll overflow-x-auto shadow-md">
      {error ? (
        <p>Transliteration not found !!!</p>
      ) : transliteration ? (
        <>
          <div>{parseHTML(transliteration.preSutra)}</div>
          <h1 className="text-center font-bold text-2xl text-red-500">{`${transliteration.sutraText} ॥${metadata.adhyaya} - ${metadata.pada} - ${metadata.sutra}॥`}</h1>
          <div>{parseHTML(transliteration.text)}</div>
        </>
      ) : ( 
        <p>No Transliteration Found</p>
      )
      }
    </div>
  )
}
