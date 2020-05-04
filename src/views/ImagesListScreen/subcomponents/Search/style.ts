import styled from 'styled-components'
import { Button } from '../../../../components'

export const Container = styled.div`
  margin: ${({ theme }): string => theme.spacing[1]}px;
  margin-bottom: ${({ theme }): string => theme.spacing[0]}px;
`

export const HorizontalFlexForm = styled.form`
  display: flex;
  align-items: center;
  & > ${Button} {
    margin-left: 10px;
  }
`
