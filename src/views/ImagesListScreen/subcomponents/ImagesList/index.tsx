import React from 'react'
import { Container } from './style'
import { Image } from '../../../../components'
import { Data } from '../../../../types'

export const ImagesList = ({ data }: { data: Data[] }) => (
  <Container>
    {data.map((item) => (
      <Image key={item.id} data={item} />
    ))}
  </Container>
)
