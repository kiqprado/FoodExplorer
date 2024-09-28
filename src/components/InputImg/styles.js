import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border-radius: 0.8rem;
  cursor: pointer;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  > label {
    display: flex;
    align-items: center;
    padding: 1.2rem 1.4rem;
    font-size: 1.4rem;

    input {
      display: none;
    }

    svg {
      font-size: 2.4rem;
      margin: 0 0.8rem;
    }
  }
`