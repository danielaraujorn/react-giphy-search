import React, { useMemo, useCallback, ReactElement } from 'react'
import { Container, Text } from './style'
import { Data } from '../../types'
import { useHistory } from 'react-router-dom'

export const Image = ({ data }: { data: Data }): ReactElement => {
  const {
    id,
    title,
    images: {
      original: { url: originalUrl },
    },
  } = data
  const history = useHistory()
  const redirect = useCallback(() => {
    history.push('/' + id)
  }, [id, history])

  const renderedImage = useMemo(() => {
    return (
      <Container title={title} src={originalUrl} onClick={redirect}>
        <Text>{title}</Text>
      </Container>
    )
  }, [title, originalUrl, redirect])

  return renderedImage
}
