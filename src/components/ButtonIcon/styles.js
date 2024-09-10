import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`