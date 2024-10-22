import styled from 'styled-components'

export const Container = styled.span`
  border-radius: 0.5rem;
  padding: 0.4rem 0.8rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`
