import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { imagesListReducer } from '../features/imagesList'

export const store = configureStore({
  reducer: {
    imagesList: imagesListReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
