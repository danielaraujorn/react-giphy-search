import React, { ReactElement } from 'react'
import { Container, Title } from './style'

export const Header = (): ReactElement => {
  return (
    <Container>
      <Title>
        Pop<b>Gifs</b>!
      </Title>
    </Container>
  )
}
