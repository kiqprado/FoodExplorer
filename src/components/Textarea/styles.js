import styled from 'styled-components'

export const Container = styled.textarea`
  width: 30rem;
  height: 17rem;
  padding: 1.4rem;

  border: none;
  border-radius: 0.8rem;
  resize: none;
  outline: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
`