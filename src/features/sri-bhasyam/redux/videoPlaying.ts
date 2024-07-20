import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "@/app/store"

const videoPlayingSlice = createSlice({
  name: "isVideoPlaying",
  initialState: false,
  reducers: {
    toggleVideoPlaying(state) {
      return !state
    },
  },
})

export const { toggleVideoPlaying } = videoPlayingSlice.actions

export const selectvideoPlaying = (state: RootState) => state.isVideoPlaying

export default videoPlayingSlice.reducer
