import { apiSlice } from "@/app/api/apiSlice"

interface Audio {
  audio_file_path: string
}

interface Video {
  video_link: string
}

export const mediaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAudio: builder.query<
      Audio,
      {
        adhyaya_no: number
        pada_no: number
        adhikarna_no: number
        sutra_no: number
      }
    >({
      query: ({ adhyaya_no, pada_no, adhikarna_no, sutra_no }) => ({
        url: `/ramanujacharya/sri-bhashyam/sutras/${adhyaya_no}/${pada_no}/${adhikarna_no}/${sutra_no}/audio`,
        method: "GET",
      }),
    }),
    getVideo: builder.query<
      Video,
      {
        adhyaya_no: number
        pada_no: number
        adhikarna_no: number
        sutra_no: number
      }
    >({
      query: ({ adhyaya_no, pada_no, adhikarna_no, sutra_no }) => ({
        url: `/ramanujacharya/sri-bhashyam/sutras/${adhyaya_no}/${pada_no}/${adhikarna_no}/${sutra_no}/video`,
        method: "GET",
      }),
    }),
  }),
})

export const {
  useGetAudioQuery,
  useGetVideoQuery,
} = mediaApiSlice

