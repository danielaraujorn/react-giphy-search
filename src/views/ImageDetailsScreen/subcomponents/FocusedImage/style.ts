import styled from 'styled-components'

export const Container = styled.div`
  margin: ${({ theme }) => theme.margin[2]}px
    ${({ theme }) => theme.margin[1]}px;
`

export const Img = styled.img`
  width: 100%;
`

export const TitleContainer = styled.div`
  display: flex;
  h1 {
    font-size: 28px;
  }
  button {
    padding: ${({ theme }) => theme.margin[0]}px;
    padding-left: 0px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`
