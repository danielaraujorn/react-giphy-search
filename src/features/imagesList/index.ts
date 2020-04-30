import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../store'
import { giphy } from '../../api'

enum Message {
  ERROR,
  OK,
}

export interface Data {
  type: string
  id: string
  title: string
  images: Image
}

interface ImageData {
  url: string
}

interface Image {
  preview_gif: ImageData
  original: ImageData
}

interface Pagination {
  total_count: number
  count: number
  offset: number
}

interface ImagesListState {
  text: string
  data: Data[]
  pagination: Pagination
  message: Message
}

const initialState: ImagesListState = {
  text: '',
  data: [],
  pagination: { total_count: 0, count: 0, offset: 0 },
  message: Message.OK,
}

export const imagesList = createSlice({
  name: 'imagesList',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<ImagesListState>) => {
      const { data, pagination, message, text } = action.payload
      state.text = text
      state.data = data
      state.pagination = pagination
      state.message = message
    },
    concatImages: (state, action: PayloadAction<ImagesListState>) => {
      const { data, pagination, message } = action.payload
      state.data = [...state.data, ...data]
      state.message = message
      state.pagination = {
        ...pagination,
        count: pagination.count + state.pagination.count,
      }
    },
  },
})

export const { setImages, concatImages } = imagesList.actions

const PAGE_TOTAL = 12

export const searchImages = (text: string): AppThunk => async (dispatch) => {
  const result = await giphy.search(text, {
    limit: PAGE_TOTAL,
  })
  dispatch(setImages({ ...result, text }))
}

export const loadMore = (): AppThunk => async (dispatch, getState) => {
  const {
    imagesList: { text, data, pagination },
  } = getState()
  if (data.length > 0 && pagination.total_count > pagination.count) {
    const result = await giphy.search(text, {
      limit: PAGE_TOTAL,
      offset: pagination.count,
    })
    dispatch(concatImages(result))
  }
}

export const selectImagesList = (state: RootState) => state.imagesList

export const imagesListReducer = imagesList.reducer
