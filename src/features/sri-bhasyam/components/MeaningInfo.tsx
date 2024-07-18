const meaning = {
  kannada: "kannada",
  roman: "english",
  telugu: "telugu",
  tamil: "tulu",
}

interface MeaningInfoProps {
  language?: string
}

export default function MeaningInfo({ language = "roman" }: MeaningInfoProps) {
  return (
    <div className="bg-secondary font-semibold p-4 [&>*]:p-4 rounded-md h-[300px] overflow-y-scroll overflow-x-auto shadow-md">
      <p>
        {language === "kannada" && meaning.kannada}
        {language === "roman" && meaning.roman}
        {language === "telugu" && meaning.telugu}
        {language === "tamil" && meaning.tamil}
      </p>
    </div>
  )
}
