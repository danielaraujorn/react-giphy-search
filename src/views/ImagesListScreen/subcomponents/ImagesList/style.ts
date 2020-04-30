import styled from 'styled-components'

export const Container = styled.div`
  margin: ${({ theme }) => theme.margin[0]}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    margin: ${({ theme }) => theme.margin[0]}px;
  }
`
