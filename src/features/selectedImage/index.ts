import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Data, ImagesListState } from '../../types'
import { AppThunk, RootState } from '../../store'
import { giphy } from '../../api'

interface SimilarImage {
  data?: Data
  relatedData?: ImagesListState
}

const initialState: SimilarImage = {}

export const selectedImage = createSlice({
  name: 'selectedImage',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<SimilarImage>) => {
      state.data = action.payload.data
      state.relatedData = action.payload.relatedData
    },
    concatRelated: (state, action: PayloadAction<ImagesListState>) => {
      const { data, pagination } = action.payload
      state.relatedData = {
        data: state.relatedData?.data
          ? [...state.relatedData?.data, ...data]
          : data,
        pagination: {
          count: state.relatedData?.pagination.count
            ? state.relatedData.pagination.count + pagination.count
            : pagination.count,
          total_count: pagination.total_count,
          offset: pagination.offset,
        },
      }
    },
  },
})

export const { setImage, concatRelated } = selectedImage.actions

const LIMIT_TOTAL = { limit: 6 }

export const searchImage = (id: string): AppThunk => async (
  dispatch,
  getState
) => {
  const selected = getState().selectedImage
  if (selected?.data?.id !== id) {
    await dispatch(setImage({}))
  }
  const { data } = await giphy.gif(id)
  const relatedData = await giphy.related(id, { ...LIMIT_TOTAL })
  dispatch(setImage({ data, relatedData }))
}

export const loadMoreRelated = (): AppThunk => async (dispatch, getState) => {
  const selected = getState().selectedImage
  if (selected?.data?.id) {
    const relatedData = await giphy.related(selected.data.id, {
      ...LIMIT_TOTAL,
      offset: selected.relatedData?.pagination.count,
    })
    dispatch(concatRelated(relatedData))
  }
}

export const selectSelectedImage = (state: RootState) => state.selectedImage

export const selectedImageReducer = selectedImage.reducer
