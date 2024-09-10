import styled from 'styled-components'

export const Container = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  border: 1px solid ${({ theme }) => theme.COLORS.DARK_100};
  border-radius: 0.8rem;
  position: relative;

  width: 21rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  > :nth-child(1) {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  > :last-child {
    margin-top: 0.6rem;
  }
`

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  > img {
    width: 12rem;
    height: 12rem;

    object-fit: cover;
  }

  > h4 {
    font-size: 1.4rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`
