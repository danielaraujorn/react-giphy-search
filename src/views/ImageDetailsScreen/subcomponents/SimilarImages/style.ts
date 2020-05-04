import styled from 'styled-components'

export const Container = styled.div`
  margin: ${({ theme }): string => theme.spacing[2]}px
    ${({ theme }): string => theme.spacing[1]}px;
  svg {
    fill: ${({ theme }): string => theme.text.color};
  }
`

export const Text = styled.h2`
  color: ${({ theme }): string => theme.text.color};
  font-size: 1.4rem;
`
