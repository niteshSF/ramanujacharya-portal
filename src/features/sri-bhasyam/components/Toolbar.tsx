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
} from "lucide-react"
import { selectMetadata, setSutra } from "../redux/sriBhashyamMetaDataSlice"
import MediaDisplay from "./MediaDisplay"
import { useGetAdhikarnaQuery, useGetAdhikarnasQuery } from "../api/adhikarnasApiSlice"

const languages = [
  { value: "roman", label: "Roman/English" },
  { value: "kannada", label: "Kannada" },
  { value: "telugu", label: "Telugu" },
  { value: "tamil", label: "Tamil" },
]

export default function Toolbar() {
  const dispatch = useDispatch()

  const metadata = useSelector(
    (state: RootState) => selectMetadata((state))
  )

  const {
    data: adhikarnas
  } = useGetAdhikarnasQuery({
    adhyaya_no: metadata.adhyaya,
    pada_no: metadata.pada,
  })

  const {
    data: adhikarna
  } = useGetAdhikarnaQuery({
    adhyaya_no: metadata.adhyaya,
    pada_no: metadata.pada,
    adhikarna_no: metadata.adhikarna,
  })

  const selectedLanguage = useSelector((state: RootState) =>
    selectLanguage(state)
  )

  const handleLanguageChange = (value: string) => {
    dispatch(setLanguage(value as any))
  }

  const updateURL = (increment: number) => {
    dispatch(setSutra(metadata.sutra + increment))
  }

  const isPreviousDisabled = metadata.sutra <= 5
  const isNextDisabled = metadata.sutra >= (adhikarna ? adhikarna.sutra_range[1] : 0)


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
      <MediaDisplay/>
    </div>
  )
}
