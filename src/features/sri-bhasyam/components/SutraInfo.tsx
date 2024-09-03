import { RootState } from "@/app/store"
import { useSelector } from "react-redux"
import { selectMetadata } from "../redux/sriBhashyamMetaDataSlice"
import { useGetSutraQuery } from "../api/sutrasApiSlice"
import { parseHTML, romanToDevanagari } from "@/lib/utils"
import AdhikarnaInfo from "./AdhikarnaInfo"

export default function SutraInfo() {
  const metadata = useSelector((state: RootState) => selectMetadata(state))
  const {
    data: sutra
  } = useGetSutraQuery({
    adhyaya_no: metadata.adhyaya,
    pada_no: metadata.pada,
    adhikarna_no: metadata.adhikarna,
    sutra_no: metadata.sutra,
  })

  return (
    <div>
      <AdhikarnaInfo/>
      {sutra && (
        <div className="bg-secondary font-semibold p-4 [&>*]:p-4 rounded-md h-[300px] overflow-y-scroll overflow-x-auto shadow-md">
          <div>{parseHTML(sutra.preSutra)}</div>
          <h1 className="text-center font-bold text-2xl text-red-500">{`${sutra.sutra} ॥${romanToDevanagari(metadata.adhyaya.toString())}- ${romanToDevanagari( metadata.pada.toString() )} - ${romanToDevanagari( metadata.sutra.toString() )}॥`}</h1>
          <div>{parseHTML(sutra.devanagari_commentary)}</div>
        </div>
      )}
    </div>
  )
}
