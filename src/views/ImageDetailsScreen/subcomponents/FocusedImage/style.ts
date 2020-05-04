import styled from 'styled-components'

export const Container = styled.div`
  margin: ${({ theme }): string => theme.spacing[1]}px;
  svg {
    fill: ${({ theme }): string => theme.text.color};
  }
`

export const Img = styled.img`
  width: 100%;
  border-radius: ${({ theme }): number => theme.borderRadius}px;
`

export const TitleContainer = styled.div`
  color: ${({ theme }): string => theme.text.color};
  display: flex;
  h1 {
    font-size: 1.75rem;
    margin: ${({ theme }): string => theme.spacing[0]}px 0;
  }
  button {
    padding: ${({ theme }): string => theme.spacing[0]}px;
    padding-left: 0px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`
