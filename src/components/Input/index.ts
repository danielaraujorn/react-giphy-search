import styled from 'styled-components'

export const Input = styled.input`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }): string => theme.primary.dark};
  border-color: ${({ theme }): string => theme.primary.dark}88;
  border-width: 2px;
  border-style: solid;
  background-color: ${({ theme }): string => theme.primary.contrastColor};
  border-radius: ${({ theme }): number => theme.borderRadius}px;
  width: 100%;
  height: 50px;
  outline: none;
  transition-duration: 100ms;
  padding: ${({ theme }): string =>
    `${theme.spacing[0]}px ${theme.spacing[1]}px`};
  &:focus,
  &:hover {
    border-color: ${({ theme }): string => theme.primary.dark};
  }
  &::placeholder {
    color: ${({ theme }): string => theme.primary.dark}88;
  }
`
