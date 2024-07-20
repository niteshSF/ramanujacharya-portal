const textsUrl = import.meta.env.VITE_TEXTS_URL

const urls = [
  {
    name: "IxatyadhikaraNam",
    urls: {
      sa: `${textsUrl}/works-of-ramanujacharya/bramasutra-vyakhya/sri-bhashyam/sa/1/1/05_IxatyadhikaraNam.md`,
      en: `${textsUrl}/works-of-ramanujacharya/bramasutra-vyakhya/sri-bhashyam/en/1/1/05_IxatyadhikaraNam.md`,
      kn: `${textsUrl}/works-of-ramanujacharya/bramasutra-vyakhya/sri-bhashyam/kn/1/1/05_IxatyadhikaraNam.md`,
      te: `${textsUrl}/works-of-ramanujacharya/bramasutra-vyakhya/sri-bhashyam/te/1/1/05_IxatyadhikaraNam.md`,
      ta: `${textsUrl}/works-of-ramanujacharya/bramasutra-vyakhya/sri-bhashyam/ta/1/1/05_IxatyadhikaraNam.md`,
    },
  },
]

type Lang = "sa" | "en" | "kn" | "te" | "ta"

export const getUrl = (infoSlug: string, lang: Lang) => {
  return urls.find((url) => url.name === infoSlug)?.urls[lang]
}

export default urls
