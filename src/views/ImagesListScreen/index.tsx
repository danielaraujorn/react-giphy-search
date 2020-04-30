import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { Search, ImagesList } from './subcomponents'
import { selectImagesList, loadMore } from '../../features/imagesList'
import { Container } from '../../components'

const ImagesListScreen = () => {
  const { data } = useSelector(selectImagesList)
  const dispatch = useDispatch()

  return (
    <Container>
      <Search />
      <InfiniteScroll
        pageStart={0}
        loadMore={() => dispatch(loadMore())}
        hasMore={true || false}
      >
        <ImagesList data={data} />
      </InfiniteScroll>
    </Container>
  )
}

export default ImagesListScreen
