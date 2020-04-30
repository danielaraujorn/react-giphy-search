import styled from 'styled-components'

export const Input = styled.input`
  background-color: ${({ theme }): string => theme.text.placeholder};
  border: 3px solid ${({ theme }): string => theme.primary.main};
  width: 100%;
  height: 50px;
  outline: none;
  padding: 12px;
`
