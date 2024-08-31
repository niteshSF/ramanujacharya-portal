import { apiSlice } from "@/app/api/apiSlice";

interface Sutra {
  number: number;
  preSutra: string;
  sutra: string;
  devanagari_commentary: string;
}

export const sutrasApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSutras: builder.query<
      number[],
      { adhyaya_no: number; pada_no: number; adhikarna_no: number }
    >({
      query: ({ adhyaya_no, pada_no, adhikarna_no }) => ({
        url: `/ramanujacharya/sri-bhashyam/sutras/${adhyaya_no}/${pada_no}/${adhikarna_no}`,
        method: "GET",
      }),
    }),
    getSutra: builder.query<
      Sutra,
      {
        adhyaya_no: number;
        pada_no: number;
        adhikarna_no: number;
        sutra_no: number;
      }
    >({
      query: ({ adhyaya_no, pada_no, adhikarna_no, sutra_no }) => ({
        url: `/ramanujacharya/sri-bhashyam/sutras/${adhyaya_no}/${pada_no}/${adhikarna_no}/${sutra_no}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetSutrasQuery,
  useGetSutraQuery,
} = sutrasApiSlice;

