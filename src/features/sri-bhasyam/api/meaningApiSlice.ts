import { apiSlice } from "@/app/api/apiSlice"

interface Meaning {
  language: string
  text: string
}

export const meaningsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMeaning: builder.query<
      Meaning,
      {
        adhyaya_no: number
        pada_no: number
        adhikarna_no: number
        sutra_no: number
        lang: string
      }
    >({
      query: ({ adhyaya_no, pada_no, adhikarna_no, sutra_no, lang = "roman" }) => ({
        url: `/ramanujacharya/sri-bhashyam/sutras/${adhyaya_no}/${pada_no}/${adhikarna_no}/${sutra_no}/meaning/${lang}`,
        method: "GET",
      }),
    }),
  }),
})

export const { useGetMeaningQuery } = meaningsApiSlice

