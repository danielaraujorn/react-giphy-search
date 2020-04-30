import styled from 'styled-components'

export const Message = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: ${({ theme }): string => theme.margin[0]}px;
  color: ${({ theme }): string => theme.text.color};
`
