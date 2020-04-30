import React, { useCallback, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { Search, ImagesList } from './subcomponents'
import { selectImagesList, loadMore } from '../../features/imagesList'
import { Container, Message } from '../../components'
import { Status } from '../../types'

const ImagesListScreen = (): ReactElement => {
  const { data, status } = useSelector(selectImagesList)
  const dispatch = useDispatch()
  const loadMoreItems = useCallback(() => {
    dispatch(loadMore())
  }, [dispatch])
  return (
    <Container>
      <Search />
      {status === Status.OK && data.length > 0 && (
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMoreItems}
          hasMore={true || false}
        >
          <ImagesList data={data} />
        </InfiniteScroll>
      )}
      {status === Status.ERROR && <Message>Error on loading</Message>}
      {status === Status.EMPTY && <Message>Not found</Message>}
    </Container>
  )
}

export default ImagesListScreen
