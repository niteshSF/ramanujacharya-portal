import { apiSlice } from "@/app/api/apiSlice"

interface Transliteration {
  language: string
  preSutra: string
  sutraText: string
  text: string
}

export const transliterationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransliteration: builder.query<
      Transliteration,
      {
        adhyaya_no: number
        pada_no: number
        adhikarna_no: number
        sutra_no: number
        lang: string
      }
    >({
      query: ({ adhyaya_no, pada_no, adhikarna_no, sutra_no, lang = "roman" }) => ({
        url: `/ramanujacharya/sri-bhashyam/sutras/${adhyaya_no}/${pada_no}/${adhikarna_no}/${sutra_no}/transliteration/${lang}`,
        method: "GET",
      }),
    }),
  }),
})

export const { useGetTransliterationQuery } = transliterationsApiSlice

