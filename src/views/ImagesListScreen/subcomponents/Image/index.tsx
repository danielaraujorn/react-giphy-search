import React, { useMemo, useCallback } from 'react'
import { Container, Text } from './style'
import { Data } from '../../../../features/imagesList'
import { useHistory } from 'react-router-dom'

export const Image = ({ data }: { data: Data }) => {
  const {
    id,
    title,
    images: {
      original: { url },
    },
  } = data
  const history = useHistory()
  const redirect = useCallback(() => {
    history.push('/' + id)
  }, [id, history])

  const renderedImage = useMemo(
    () => (
      <Container title={title} original={url} onClick={redirect}>
        <Text>{title}</Text>
      </Container>
    ),
    [title, url, redirect]
  )

  return renderedImage
}
