const transliteration = {
  kannada: "kannada",
  roman: "english",
  telugu: "telugu",
  tamil: "tulu",
}

interface TransliterationInfoProps {
  language?: string
}

export default function TransliterationInfo({
  language = "roman",
}: TransliterationInfoProps) {
  return (
    <div className="bg-secondary font-semibold p-4 [&>*]:p-4 rounded-md h-[300px] overflow-y-scroll overflow-x-auto shadow-md">
      <p>
        {language === "kannada" && transliteration.kannada}
        {language === "roman" && transliteration.roman}
        {language === "telugu" && transliteration.telugu}
        {language === "tamil" && transliteration.tamil}
      </p>
    </div>
  )
}
