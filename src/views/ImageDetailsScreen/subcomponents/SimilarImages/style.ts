import styled from 'styled-components'

export const Container = styled.div`
  margin: ${({ theme }): string => theme.margin[2]}px
    ${({ theme }): string => theme.margin[1]}px;
`

export const Text = styled.h2`
  color: ${({ theme }): string => theme.text.color};
  font-size: 1.4rem;
`
