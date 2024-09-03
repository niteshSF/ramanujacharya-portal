import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import { useGetAudioQuery } from "../api/mediaApiSlice"
import { useSelector } from "react-redux"
import { RootState } from "@/app/store"
import { selectMetadata } from "../redux/sriBhashyamMetaDataSlice"

export default function AudioPlay(){
  const metadata = useSelector((state: RootState) => selectMetadata(state))
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const {
    data: audio
  } = useGetAudioQuery({
    adhyaya_no: metadata.adhyaya,
    pada_no: metadata.pada,
    adhikarna_no: metadata.adhikarna,
    sutra_no: metadata.sutra
  })

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      }
      else {
        audioRef.current.play()
      }
    setIsPlaying(!isPlaying)
    }
  }    

  return (
    <div>
      <Button onClick={togglePlayPause} className="bg-secondary hover:bg-stone-500 text-primary rounded-md">
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </Button>
      <audio ref={audioRef} src={audio?.audio_file_path} />
    </div>
  )
}
