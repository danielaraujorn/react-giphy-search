import styled from 'styled-components'

export const Container = styled.div`
  margin: ${({ theme }) => theme.margin[2]}px
    ${({ theme }) => theme.margin[1]}px;
`

export const Text = styled.h2`
  font-size: 22px;
`
