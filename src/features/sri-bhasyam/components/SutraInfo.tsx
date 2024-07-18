import { RootState } from "@/app/store"
import { useSelector } from "react-redux"
import { selectSutra } from "../redux/sriBhashyamMetaDataSlice"
import { sutraSelector } from "@/data/sutras"

export default function SutraInfo() {
  const sutra = useSelector((state: RootState) => selectSutra(state))
  const selectedSutra = sutraSelector(sutra)

  return (
    <div>
      <h1 className="text-center font-bold text-3xl mb-4">
        ईक्षत्यधिकरणम ॥१-१-५॥ (सू ५ – १२)
      </h1>
      <div className="bg-secondary font-semibold p-4 [&>*]:p-4 rounded-md h-[300px] overflow-y-scroll overflow-x-auto shadow-md">
        <p>{selectedSutra?.preSutra}</p>
        <h2 className="text-center font-bold text-2xl text-red-500">
          {selectedSutra?.sutra}
        </h2>
        <p>{selectedSutra?.devanagariCommentary}</p>
      </div>
    </div>
  )
}
