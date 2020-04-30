import styled from 'styled-components'

export const Container = styled.div`
  margin: ${({ theme }): string => theme.margin[2]}px
    ${({ theme }): string => theme.margin[1]}px;
`

export const Img = styled.img`
  width: 100%;
`

export const TitleContainer = styled.div`
  color: ${({ theme }): string => theme.text.color};
  display: flex;
  h1 {
    font-size: 1.75rem;
    margin: ${({ theme }): string => theme.margin[0]}px 0;
  }
  button {
    padding: ${({ theme }): string => theme.margin[0]}px;
    padding-left: 0px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`
