import { useSelector } from "react-redux"
import { selectMetadata } from "../redux/sriBhashyamMetaDataSlice"
import { useGetAdhikarnaQuery } from "../api/adhikarnasApiSlice"
import { RootState } from "@/app/store"
import { romanToDevanagari } from "@/lib/utils"

export default function AdhikarnaInfo(){
  const metadata = useSelector((state: RootState) => selectMetadata(state))
  const {
    data: adhikarna
  } = useGetAdhikarnaQuery({
    adhyaya_no: metadata.adhyaya,
    pada_no: metadata.pada,
    adhikarna_no: metadata.adhikarna
  })
  return (
    <h1 className="text-center font-bold text-3xl mb-4">
      {adhikarna && `${adhikarna.devanagari_name} ॥ ${romanToDevanagari(metadata.adhyaya.toString())} - ${romanToDevanagari( metadata.pada.toString() )} - ${romanToDevanagari( metadata.adhikarna.toString() )} ॥` }
    </h1>
  )
}
