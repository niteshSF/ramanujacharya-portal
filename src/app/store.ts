import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./api/apiSlice"
import languageReducer from "@/features/sri-bhasyam/redux/languageSlice"
import sriBhashyamMetaDataReducer from "@/features/sri-bhasyam/redux/sriBhashyamMetaDataSlice"
import isVideoPlayingReducer from "@/features/sri-bhasyam/redux/videoPlaying"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    language: languageReducer,
    sriBhashyamMetadata: sriBhashyamMetaDataReducer,
    isVideoPlaying: isVideoPlayingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: import.meta.env.DEV,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
