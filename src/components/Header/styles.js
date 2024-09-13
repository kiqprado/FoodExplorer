import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.6rem 2.4rem 2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`

export const OrderSection = styled.div`
  position: relative;

  span {
    position: absolute;
    top: -0.8rem;
    right: -0.8rem;

    padding: 0.3rem 0.4rem 0.2rem;

    font-size: 1rem;

    border-radius: 99%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }
`