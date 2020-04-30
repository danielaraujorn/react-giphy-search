import React from 'react'
import { Container } from './style'
import { Image } from '../'
import { Data } from '../../../../features/imagesList'

export const ImagesList = ({ data }: { data: Data[] }) => (
  <Container>
    {data.map((item) => (
      <Image key={item.id} data={item} />
    ))}
  </Container>
)
