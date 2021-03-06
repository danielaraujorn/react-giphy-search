import styled from 'styled-components'

export const Container = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({ theme }): string =>
    `linear-gradient(0deg, ${theme.primary.dark}, ${theme.primary.main})`};
`

export const Title = styled.p`
  font-size: 2rem;
  color: white;
  font-weight: 200;
  & > b {
    color: ${({ theme }): string => theme.secondary.main};
    font-weight: 600;
  }
`
