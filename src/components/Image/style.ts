import styled from 'styled-components'

export const Container = styled.div<{ src: string }>`
  &:before {
    content: '';
    float: left;
    padding-top: 100%;
  }
  cursor: pointer;
  min-width: 220px;
  flex: 1 0 auto;
  height: auto;
  margin: 0;
  background: ${({ src, theme }) =>
      `linear-gradient(0deg,${theme.image.background},transparent),url(${src})`}
    gray;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
`

export const Text = styled.p`
  max-width: 165px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  font-size: 16px;
  color: ${({ theme }) => theme.image.contrastColor};
  font-weight: 600;
  margin: 0;
`
