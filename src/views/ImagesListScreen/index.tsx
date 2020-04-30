import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { selectImagesList, loadMore } from '../../features/imagesList'
import { Search, Container } from '../../components'
import { ImagesList } from './subcomponents'

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
        // loader={
        //   <div className='loader' key={0}>
        //     Loading ...
        //   </div>
        // }
      >
        <ImagesList data={data} />
      </InfiniteScroll>
    </Container>
  )
}

export default ImagesListScreen
