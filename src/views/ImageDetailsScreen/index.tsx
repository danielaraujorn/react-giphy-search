import React, { useEffect, useCallback, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FocusedImage, SimilarImages } from './subcomponents'
import {
  selectSelectedImage,
  searchImage,
  loadMoreRelated,
} from '../../features/selectedImage'
import { Container } from '../../components'
import { Status } from '../../types'

const ImageDetailsScreen = (): ReactElement => {
  const { imageId }: { imageId: string } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchImage(imageId))
  }, [imageId, dispatch])

  const { data, relatedData, status } = useSelector(selectSelectedImage)

  const loadMore = useCallback(() => {
    dispatch(loadMoreRelated())
  }, [dispatch])

  return (
    <Container>
      <FocusedImage data={data} status={status} />
      {status === Status.OK && (
        <SimilarImages data={relatedData?.data} loadMore={loadMore} />
      )}
    </Container>
  )
}

export default ImageDetailsScreen
