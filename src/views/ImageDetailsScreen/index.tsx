import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FocusedImage, SimilarImages } from './subcomponents'
import {
  selectSelectedImage,
  searchImage,
  loadMoreRelated,
} from '../../features/selectedImage'
import { Container } from '../../components'

const ImageDetailsScreen = () => {
  const { imageId }: { imageId: string } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchImage(imageId))
  }, [imageId, dispatch])

  const { data, relatedData } = useSelector(selectSelectedImage)

  const loadMore = useCallback(() => {
    dispatch(loadMoreRelated())
  }, [dispatch])

  return (
    <Container>
      <FocusedImage data={data} />
      <SimilarImages data={relatedData?.data} loadMore={loadMore} />
    </Container>
  )
}

export default ImageDetailsScreen
