import React, { useMemo, useCallback, ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { GoChevronLeft } from 'react-icons/go'
import { Img, Container, TitleContainer } from './style'
import { Data, Status } from '../../../../types'

export const FocusedImage = ({
  data,
  status,
}: {
  data?: Data
  status?: Status
}): ReactElement => {
  const history = useHistory()
  const goBack = useCallback(() => {
    if (history.length > 1) history.goBack()
    else history.replace('/')
  }, [history])
  const title = useMemo(() => {
    const getText = (): string | undefined => {
      if (status === Status.ERROR) return 'Error'
      if (data) return data.title
      return 'Loading...'
    }
    const text = getText()
    return (
      <TitleContainer>
        <button onClick={goBack}>
          <GoChevronLeft size="2em" />
        </button>
        <h1>{text}</h1>
      </TitleContainer>
    )
  }, [data, goBack, status])
  const image = useMemo(
    () => !!data && <Img alt={data?.title} src={data?.images?.original.url} />,
    [data],
  )
  return (
    <Container>
      {title}
      {image}
    </Container>
  )
}
