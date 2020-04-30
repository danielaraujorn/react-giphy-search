import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ImagesListState, SelectedImage, Status } from '../../types'
import { AppThunk, RootState } from '../../store'
import { giphy } from '../../api'

const initialState: SelectedImage = {}

export const selectedImage = createSlice({
  name: 'selectedImage',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<SelectedImage>): void => {
      const { data, relatedData, status } = action.payload
      if (!data) {
        state.status = Status.EMPTY
      } else if (status === 200) {
        state.data = data
        state.relatedData = relatedData
        state.status = Status.OK
      } else {
        state.status = Status.ERROR
      }
    },
    concatRelated: (state, action: PayloadAction<ImagesListState>): void => {
      const { data, pagination, status } = action.payload
      if (status === 200) {
        state.relatedData = {
          status: Status.OK,
          data: state.relatedData?.data
            ? [...state.relatedData?.data, ...data]
            : data,
          pagination: {
            count: state.relatedData?.pagination.count
              ? state.relatedData.pagination.count + pagination.count
              : pagination.count,
            // eslint-disable-next-line @typescript-eslint/camelcase
            total_count: pagination.total_count,
            offset: pagination.offset,
          },
        }
        state.status = Status.OK
      } else {
        state.status = Status.ERROR
      }
    },
    onError: (state): void => {
      state.status = Status.ERROR
    },
  },
})

export const { setImage, concatRelated, onError } = selectedImage.actions

const LIMIT_TOTAL = { limit: 6 }

export const searchImage = (id: string): AppThunk => async (
  dispatch,
  getState,
): Promise<void> => {
  const selected = getState().selectedImage
  if (selected?.data?.id !== id) {
    await dispatch(setImage({}))
  }
  try {
    const { data } = await giphy.gif(id)
    const relatedData = await giphy.related(id, { ...LIMIT_TOTAL })
    dispatch(setImage({ data, relatedData, status: relatedData.meta.status }))
  } catch {
    dispatch(onError())
  }
}

export const loadMoreRelated = (): AppThunk => async (
  dispatch,
  getState,
): Promise<void> => {
  try {
    const selected = getState().selectedImage
    if (selected?.data?.id) {
      const relatedData = await giphy.related(selected.data.id, {
        ...LIMIT_TOTAL,
        offset: selected.relatedData?.pagination.count,
      })
      dispatch(
        concatRelated({ ...relatedData, status: relatedData.meta.status }),
      )
    }
  } catch {
    dispatch(onError())
  }
}

export const selectSelectedImage = (state: RootState): SelectedImage =>
  state.selectedImage

export const selectedImageReducer = selectedImage.reducer
