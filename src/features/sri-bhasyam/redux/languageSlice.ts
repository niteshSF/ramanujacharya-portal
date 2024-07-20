import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/app/store"

const languageSlice = createSlice({
  name: "language",
  initialState: "roman" as Language,
  reducers: {
    setLanguage(_state, action: PayloadAction<Language>) {
      return action.payload
    },
  },
})

export const { setLanguage } = languageSlice.actions

export const selectLanguage = (state: RootState) => state.language

export default languageSlice.reducer
