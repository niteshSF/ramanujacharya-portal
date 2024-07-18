import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const languages = [
  { value: "roman", label: "Roman/English" },
  { value: "kannada", label: "Kannada" },
  { value: "telugu", label: "Telugu" },
  { value: "tamil", label: "Tamil" },
]

export default function Toolbar() {
  return (
    <div className="flex justify-between p-2">
      <Select>
        <SelectTrigger className="w-[180px] text-primary font-bold bg-secondary border-none">
          <SelectValue
            defaultValue={languages[0].value}
            placeholder={languages[0].label}
          />
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
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </div>
      <div className="flex gap-2 [&>*]:text-primary [&>*]:font-bold [&>*]:bg-secondary">
        <Button>A</Button>
        <Button>V</Button>
      </div>
    </div>
  )
}
