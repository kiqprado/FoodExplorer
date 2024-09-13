import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: footer;
  padding: 2.6rem;
  display: flex;
  gap: 1.6rem;
  align-items: center;
  line-height: 0;


  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  & > :nth-child(1) {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  span {
    font-size: 1.2rem;
  }
`
