import styled from 'styled-components'

export const Button = styled.button`
  max-width: 200px;
  min-width: 80px;
  width: 30%;
  height: 50px;
  background-color: ${({ theme }): string => theme.primary.main};
  border: none;
  color: ${({ theme }): string => theme.primary.contrastColor};
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }): string => theme.primary.dark};
  }
`
