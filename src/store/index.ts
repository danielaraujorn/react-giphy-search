import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { imagesListReducer } from '../features/imagesList'
import { selectedImageReducer } from '../features/selectedImage'

export const store = configureStore({
  reducer: {
    imagesList: imagesListReducer,
    selectedImage: selectedImageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
