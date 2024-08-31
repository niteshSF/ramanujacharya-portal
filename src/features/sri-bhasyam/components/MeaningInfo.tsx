import { useSelector } from "react-redux"
import { selectLanguage } from "../redux/languageSlice"
import { RootState } from "@/app/store"
import { selectMetadata } from "../redux/sriBhashyamMetaDataSlice"
import { useGetMeaningQuery } from "../api/meaningApiSlice"
import { parseHTML } from "@/lib/utils"

export default function MeaningInfo() {
  const metadata = useSelector((state: RootState) => selectMetadata(state))
  const language = useSelector((state: RootState) => selectLanguage(state))
  
  const {
    data: meaning,
    error
  } = useGetMeaningQuery({
    adhyaya_no: metadata.adhyaya,
    pada_no: metadata.pada,
    adhikarna_no: metadata.adhikarna,
    sutra_no: metadata.sutra,
    lang: language 
  })

  return (
    <div className="bg-secondary font-semibold p-4 [&>*]:p-4 rounded-md h-[300px] overflow-y-scroll overflow-x-auto shadow-md">
      {error ? (
        <p>Meaning not found</p>
      ) : (
        meaning ? (
          <div>{parseHTML(meaning.text)}</div>
        ) : (
          <p>Meaning not found</p>
        )
      )}
    </div>
  )
}

