import { apiSlice } from "@/app/api/apiSlice"

interface Pada {
  number: number
  devanagari_name: string
  kannada_name: string | null
  tamil_name: string | null
  telugu_name: string | null
}

export const padasApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPadas: builder.query<Pada[], { adhyaya_no: number }>({
      query: ({ adhyaya_no }) => ({
        url: `/ramanujacharya/sri-bhashyam/padas/${adhyaya_no}`,
        method: "GET",
      }),
    }),
    getPada: builder.query<Pada, { adhyaya_no: number; pada_no: number }>({
      query: ({ adhyaya_no, pada_no }) => ({
        url: `/ramanujacharya/sri-bhashyam/padas/${adhyaya_no}/${pada_no}`,
        method: "GET",
      }),
    }),
  }),
})

export const { useGetPadasQuery, useGetPadaQuery } = padasApiSlice
