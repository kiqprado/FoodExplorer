import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  margin: 0 auto;
  padding: 1.2rem 0;
  
  border: none;
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
`
