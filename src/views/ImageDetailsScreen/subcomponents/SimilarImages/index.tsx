import React, { useState, useMemo, useEffect } from 'react'
import ItemsCarousel from 'react-items-carousel'
import useMediaQuery from 'react-hook-media-query'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { Container, Text } from './style'
import { Data } from '../../../../types'
import { Image } from '../../../../components'

export const SimilarImages = ({
  data,
  loadMore,
}: {
  data?: Data[]
  loadMore: () => void
}) => {
  const [index, setIndex] = useState(0)
  const small = useMediaQuery('(max-width: 487px)')
  const big = useMediaQuery('(min-width: 724px)')
  const numberOfCards = useMemo(() => {
    if (small) return 1
    if (big) return 3
    return 2
  }, [small, big])
  useEffect(() => {
    if (data && index + numberOfCards === data.length) loadMore()
  }, [index, numberOfCards, data, loadMore])
  return (
    <Container>
      <Text>See other popular images</Text>
      {data && data.length > 0 && (
        <ItemsCarousel
          infiniteLoop={false}
          gutter={16}
          activePosition={'center'}
          chevronWidth={40}
          disableSwipe={false}
          alwaysShowChevrons={false}
          numberOfCards={numberOfCards}
          outsideChevron={big}
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={index}
          requestToChangeActive={(value: number) => setIndex(value)}
          rightChevron={<GoChevronRight size='2em' />}
          leftChevron={<GoChevronLeft size='2em' />}
        >
          {data.map((item) => (
            <Image key={item.id} data={item} />
          ))}
        </ItemsCarousel>
      )}
    </Container>
  )
}
