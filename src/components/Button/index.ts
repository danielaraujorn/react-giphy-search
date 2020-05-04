import styled from 'styled-components'

export const Button = styled.button`
  max-width: 200px;
  min-width: 80px;
  width: 30%;
  height: 50px;
  transition-duration: 100ms;
  border-radius: ${({ theme }): number => theme.borderRadius}px;
  color: ${({ theme }): string => theme.primary.dark}88;
  border-color: ${({ theme }): string => theme.primary.dark}88;
  border-width: 2px;
  border-style: solid;
  background-color: ${({ theme }): string => theme.primary.contrastColor};
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  &:hover:not(:disabled) {
    border-color: ${({ theme }): string => theme.primary.dark};
    color: ${({ theme }): string => theme.primary.dark};
  }
`
