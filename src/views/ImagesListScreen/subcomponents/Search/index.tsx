import React, { useCallback, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, HorizontalFlexForm } from './style'
import { searchImages, selectImagesList } from '../../../../features/imagesList'
import { Button, Input } from '../../../../components'

export const Search = (): ReactElement => {
  const { text } = useSelector(selectImagesList)

  const dispatch = useDispatch()

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault()
      dispatch(searchImages(event.target.text.value))
    },
    [dispatch],
  )

  return (
    <Container>
      <HorizontalFlexForm onSubmit={onSubmit}>
        <Input
          required
          placeholder="Search your interests"
          autoFocus
          name="text"
          defaultValue={text}
        />
        <Button type="submit">Search</Button>
      </HorizontalFlexForm>
    </Container>
  )
}
