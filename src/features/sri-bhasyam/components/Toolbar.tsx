import { RootState } from "@/app/store"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useDispatch, useSelector } from "react-redux"
import { selectLanguage, setLanguage } from "../redux/languageSlice"
import {
  ChevronLeft,
  ChevronRight,
  ChevronFirst,
  ChevronLast,
  Play,
  Pause,
  Clapperboard,
} from "lucide-react"
import { setSutra } from "../redux/sriBhashyamMetaDataSlice"
import { useState, useEffect, useRef } from "react"
import { Toggle } from "@/components/ui/toggle"
import { toggleVideoPlaying, selectvideoPlaying } from "../redux/videoPlaying"

const languages = [
  { value: "roman", label: "Roman/English" },
  { value: "kannada", label: "Kannada" },
  { value: "telugu", label: "Telugu" },
  { value: "tamil", label: "Tamil" },
]

const sutraLimit = 12

export default function Toolbar() {
  const dispatch = useDispatch()

  const sutra = useSelector(
    (state: RootState) => state.sriBhashyamMetadata.sutra
  )

  const selectedLanguage = useSelector((state: RootState) =>
    selectLanguage(state)
  )

  const handleLanguageChange = (value: string) => {
    dispatch(setLanguage(value as any))
  }

  const updateURL = (increment: number) => {
    dispatch(setSutra(sutra + increment))
  }

  const isVideoPlaying = useSelector(selectvideoPlaying)
  console.log(isVideoPlaying)

  const handlePressChange = () => {
    dispatch(toggleVideoPlaying())
  }

  const isPreviousDisabled = sutra <= 5
  const isNextDisabled = sutra >= sutraLimit

  const [isPlaying, setIsPlaying] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [previousPlaybackState, setPreviousPlaybackState] =
    useState<boolean>(false)

  useEffect(() => {
    if (audioRef.current) {
      setPreviousPlaybackState(isPlaying)
    }

    import(`@/assets/audio/Sutra_${sutra}.m4a`)
      .then((module) => {
        setAudioUrl(module.default)
        if (audioRef.current) {
          if (previousPlaybackState) {
            audioRef.current.play()
            setIsPlaying(true)
          }
        }
      })
      .catch((error) => {
        console.error("Error loading audio file:", error)
      })
  }, [sutra])

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause()
    }
  }, [isPlaying])

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  if (!audioUrl) {
    return null
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-2 gap-4">
      <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[180px] text-primary font-bold bg-secondary border-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map(({ value, label }, index) => (
            <SelectItem key={index} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex gap-2 [&>*]:text-primary [&>*]:font-bold [&>*]:bg-secondary">
        <Button className="hover:bg-stone-500">
          <ChevronFirst />
        </Button>
        <Button
          className="hover:bg-stone-500"
          onClick={() => updateURL(-1)}
          disabled={isPreviousDisabled}
        >
          <ChevronLeft />
        </Button>
        <Button
          className="hover:bg-stone-500"
          onClick={() => updateURL(1)}
          disabled={isNextDisabled}
        >
          <ChevronRight />
        </Button>
        <Button className="hover:bg-stone-500">
          <ChevronLast />
        </Button>
      </div>
      <div className="flex gap-2 [&>*]:text-primary [&>*]:font-bold [&>*]:bg-secondary">
        <Button className="hover:bg-stone-500" onClick={handlePlayPause}>
          {isPlaying ? <Pause /> : <Play />}
        </Button>
        <Toggle
          className="hover:bg-stone-500 data-[state=on]:bg-stone-500 data-[state=off]:bg-secondary	px-4"
          pressed={isVideoPlaying}
          onPressedChange={handlePressChange}
        >
          <Clapperboard />
        </Toggle>
      </div>
      <audio ref={audioRef} src={audioUrl} />
    </div>
  )
}
