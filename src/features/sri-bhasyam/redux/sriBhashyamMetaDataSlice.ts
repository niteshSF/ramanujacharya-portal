import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/app/store"

export interface SriBhashyamMetadata {
  adhyaya: number
  pada: number
  adhikarna: number
  sutra: number
}

const initialState: SriBhashyamMetadata = {
  adhyaya: 1,
  pada: 1,
  adhikarna: 5,
  sutra: 5,
}

const sriBhashyamMetadataSlice = createSlice({
  name: "sriBhashyamMetadata",
  initialState,
  reducers: {
    setAdhyaya(state, action: PayloadAction<number>) {
      state.adhyaya = action.payload
    },
    setPada(state, action: PayloadAction<number>) {
      state.pada = action.payload
    },
    setAdhikarna(state, action: PayloadAction<number>) {
      state.adhikarna = action.payload
    },
    setSutra(state, action: PayloadAction<number>) {
      state.sutra = action.payload
    },
  },
})

export const { setAdhyaya, setPada, setAdhikarna, setSutra } =
  sriBhashyamMetadataSlice.actions

export const selectAdhyaya = (state: RootState) =>
  state.sriBhashyamMetadata.adhyaya
export const selectPada = (state: RootState) => state.sriBhashyamMetadata.pada
export const selectAdhikarna = (state: RootState) =>
  state.sriBhashyamMetadata.adhikarna
export const selectSutra = (state: RootState) => state.sriBhashyamMetadata.sutra

export default sriBhashyamMetadataSlice.reducer
