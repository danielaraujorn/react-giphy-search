import styled from 'styled-components'

export const Container = styled.div`
  margin: 16px;
`

export const Input = styled.input`
  background-color: ${({ theme }) => theme.text.placeholder};
  border: 3px solid ${({ theme }) => theme.primary.main};
  width: 100%;
  height: 50px;
  outline: none;
  padding: 12px;
`

export const Text = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.text.color};
  font-weight: 600;
`
export const Button = styled.button`
  max-width: 200px;
  min-width: 80px;
  width: 30%;
  height: 50px;
  background-color: ${({ theme }) => theme.primary.main};
  border: none;
  color: ${({ theme }) => theme.primary.contrastColor};
  font-size: 16px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primary.dark};
  }
`

export const HorizontalFlexForm = styled.form`
  display: flex;
  align-items: center;
  & > ${Button} {
    margin-left: 10px;
  }
`
