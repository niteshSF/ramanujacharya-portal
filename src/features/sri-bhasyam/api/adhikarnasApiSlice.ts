import { apiSlice } from "@/app/api/apiSlice"

interface Adhikarna {
  number: number
  devanagari_name: string
  english_name: string
  kannada_name: string | null
  tamil_name: string | null
  telugu_name: string | null
}

interface AdhikarnaOne{
  number: number
  devanagari_name: string
  english_name: string
  kannada_name: string | null
  tamil_name: string | null
  telugu_name: string | null
  sutra_range: [number, number]
}

export const adhikarnasApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdhikarnas: builder.query<
      Adhikarna[],
      { adhyaya_no: number; pada_no: number }
    >({
      query: ({ adhyaya_no, pada_no }) => ({
        url: `/ramanujacharya/sri-bhashyam/adhikarnas/${adhyaya_no}/${pada_no}`,
        method: "GET",
      }),
    }),
    getAdhikarna: builder.query<
      AdhikarnaOne,
      { adhyaya_no: number; pada_no: number; adhikarna_no: number }
    >({
      query: ({ adhyaya_no, pada_no, adhikarna_no }) => ({
        url: `/ramanujacharya/sri-bhashyam/adhikarnas/${adhyaya_no}/${pada_no}/${adhikarna_no}`,
        method: "GET",
      }),
    }),
  }),
})

export const {
  useGetAdhikarnasQuery,
  useGetAdhikarnaQuery,
} = adhikarnasApiSlice

