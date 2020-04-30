import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Text, HorizontalFlexForm } from './style'
import { searchImages, selectImagesList } from '../../../../features/imagesList'
import { Button, Input } from '../../../../components'

export const Search = () => {
  const { text } = useSelector(selectImagesList)

  const dispatch = useDispatch()

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault()
      dispatch(searchImages(event.target.text.value))
    },
    [dispatch]
  )

  return (
    <Container>
      <Text>Search your interests</Text>
      <HorizontalFlexForm onSubmit={onSubmit}>
        <Input autoFocus name='text' defaultValue={text} />
        <Button type='submit'>Search</Button>
      </HorizontalFlexForm>
    </Container>
  )
}
