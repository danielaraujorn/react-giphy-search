import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../store'
import { ImagesListState } from '../../types'
import { giphy } from '../../api'

const initialState: ImagesListState = {
  text: '',
  data: [],
  pagination: { total_count: 0, count: 0, offset: 0 },
}

export const imagesList = createSlice({
  name: 'imagesList',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<ImagesListState>) => {
      const { data, pagination, text } = action.payload
      state.text = text
      state.data = data
      state.pagination = pagination
    },
    concatImages: (state, action: PayloadAction<ImagesListState>) => {
      const { data, pagination } = action.payload
      state.data = state.data.concat(data)
      state.pagination = {
        ...pagination,
        count: pagination.count + state.pagination.count,
      }
    },
  },
})

export const { setImages, concatImages } = imagesList.actions

const LIMIT_TOTAL = { limit: 12 }

export const searchImages = (text: string): AppThunk => async (dispatch) => {
  const result = await giphy.search(text, {
    ...LIMIT_TOTAL,
  })
  dispatch(setImages({ ...result, text }))
}

export const loadMore = (): AppThunk => async (dispatch, getState) => {
  const {
    imagesList: { text, data, pagination },
  } = getState()
  if (data.length > 0 && pagination.total_count > pagination.count) {
    const result = await giphy.search(text, {
      ...LIMIT_TOTAL,
      offset: pagination.count,
    })
    dispatch(concatImages(result))
  }
}

export const selectImagesList = (state: RootState) => state.imagesList

export const imagesListReducer = imagesList.reducer
