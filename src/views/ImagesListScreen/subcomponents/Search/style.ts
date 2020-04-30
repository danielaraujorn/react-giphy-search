import styled from 'styled-components'
import { Button } from '../../../../components'

export const Container = styled.div`
  margin: ${({ theme }): string => theme.margin[2]}px
    ${({ theme }): string => theme.margin[1]}px;
`

export const Text = styled.h1`
  font-size: 1rem;
  color: ${({ theme }): string => theme.text.color};
  font-weight: 600;
`

export const HorizontalFlexForm = styled.form`
  display: flex;
  align-items: center;
  & > ${Button} {
    margin-left: 10px;
  }
`
