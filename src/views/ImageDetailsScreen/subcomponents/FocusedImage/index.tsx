import React, { useMemo, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { GoChevronLeft } from 'react-icons/go'
import { Img, Container, TitleContainer } from './style'
import { Data } from '../../../../types'

export const FocusedImage = ({ data }: { data?: Data }) => {
  const history = useHistory()
  console.log(history)
  const goBack = useCallback(() => {
    if (history.length > 1) history.goBack()
    else history.replace('/')
  }, [history])
  const title = useMemo(() => {
    const text = data
      ? data.title
        ? data.title
        : 'Image not found'
      : 'Loading...'
    return (
      <TitleContainer>
        <button onClick={goBack}>
          <GoChevronLeft size='2em' />
        </button>
        <h1>{text}</h1>
      </TitleContainer>
    )
  }, [data, goBack])
  const image = useMemo(
    () => !!data && <Img alt={data?.title} src={data?.images?.original.url} />,
    [data]
  )
  return (
    <Container>
      {title}
      {image}
    </Container>
  )
}
