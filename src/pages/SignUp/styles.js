import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 5.5rem;

  a:nth-child(1) {
    margin: 15rem 0 3rem;
  }

  a {
    align-self: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  div,
  button {
    margin-bottom: 3.2rem;
  }
`
