export interface Data {
  type: string
  id: string
  title: string
  images: ImageState
}

interface ImageData {
  url: string
}

interface ImageState {
  preview_gif: ImageData
  original: ImageData
}

interface Pagination {
  total_count: number
  count: number
  offset: number
}

export interface ImagesListState {
  text?: string
  data: Data[]
  pagination: Pagination
}
