import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  img {
    width: 8rem;
  }

  margin-bottom: 2.4rem;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h3 {
    font-size: 2rem;
  }
`

export const Link = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.TOMATO_400};
`
