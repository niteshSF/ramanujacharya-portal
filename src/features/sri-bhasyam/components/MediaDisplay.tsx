import { Toggle } from "@/components/ui/toggle"
import AudioPlay from "./AudioPlay"
import { Clapperboard } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { toggleVideoPlaying, selectvideoPlaying } from "../redux/videoPlaying"

export default function MediaDisplay(){
  const dispatch = useDispatch()

  const isVideoPlaying = useSelector(selectvideoPlaying)

  const handlePressChange = () => {
    dispatch(toggleVideoPlaying())
  }

  return (
    <div className="flex gap-2">
      <AudioPlay/>
      <Toggle
        className="font-bold text-primary hover:bg-stone-500 data-[state=on]:bg-stone-500 data-[state=off]:bg-secondary px-4"
        pressed={isVideoPlaying}
        onPressedChange={handlePressChange}
      >
        <Clapperboard />
      </Toggle>
    </div>
  )
}
