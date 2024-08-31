import { apiSlice } from "@/app/api/apiSlice";

interface Adhyaya {
  number: number;
  devanagari_name: string;
  kannada_name: string | null
  tamil_name: string | null
  telugu_name: string | null
}

export const adhyayasApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdhyayas: builder.query<Adhyaya[], void>({
      query: () => ({
        url: "/ramanujacharya/sri-bhashyam/adhyayas/",
        method: "GET",
      }),
    }),
    getAdhyaya: builder.query<Adhyaya, { adhyaya_no: number }>({
      query: ({ adhyaya_no }: { adhyaya_no: number }) => ({
        url: `/ramanujacharya/sri-bhashyam/adhyayas/${adhyaya_no}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAdhyayasQuery,
  useGetAdhyayaQuery,
} = adhyayasApiSlice

