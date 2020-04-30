import styled from 'styled-components'

export const Container = styled.div`
  margin: ${({ theme }): string => theme.margin[0]}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    margin: ${({ theme }): string => theme.margin[0]}px;
  }
`
