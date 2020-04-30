import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../store'
import { ImagesListState, Status } from '../../types'
import { giphy } from '../../api'

const initialState: ImagesListState = {
  text: '',
  data: [],
  // eslint-disable-next-line @typescript-eslint/camelcase
  pagination: { total_count: 0, count: 0, offset: 0 },
  status: Status.OK,
}

export const imagesList = createSlice({
  name: 'imagesList',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<ImagesListState>): void => {
      const { data, pagination, text, status } = action.payload
      if (pagination.total_count === 0) {
        state.status = Status.EMPTY
      } else if (status === 200) {
        state.text = text
        state.data = data
        state.pagination = pagination
        state.status = Status.OK
      } else {
        state.status = Status.ERROR
      }
    },
    concatImages: (state, action: PayloadAction<ImagesListState>): void => {
      const { data, pagination, status } = action.payload
      if (status === 200) {
        state.data = state.data.concat(data)
        state.pagination = {
          ...pagination,
          count: pagination.count + state.pagination.count,
        }
      } else {
        state.status = Status.ERROR
      }
    },
    onError: (state): void => {
      state.status = Status.ERROR
    },
  },
})

export const { setImages, concatImages, onError } = imagesList.actions

const LIMIT_TOTAL = { limit: 18 }

export const searchImages = (text: string): AppThunk => async (
  dispatch,
): Promise<void> => {
  try {
    const result = await giphy.search(text, {
      ...LIMIT_TOTAL,
    })
    dispatch(setImages({ ...result, text, status: result.meta.status }))
  } catch {
    dispatch(onError())
  }
}

export const loadMore = (): AppThunk => async (
  dispatch,
  getState,
): Promise<void> => {
  try {
    const {
      imagesList: { text, data, pagination },
    } = getState()
    if (data.length > 0 && pagination.total_count > pagination.count) {
      const result = await giphy.search(text, {
        ...LIMIT_TOTAL,
        offset: pagination.count,
      })
      dispatch(concatImages({ ...result, status: result.meta.status }))
    }
  } catch {
    dispatch(onError())
  }
}

export const selectImagesList = (state: RootState): ImagesListState =>
  state.imagesList

export const imagesListReducer = imagesList.reducer
