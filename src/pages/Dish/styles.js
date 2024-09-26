import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  
  display: grid;
  grid-template-rows: 10rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  > main {
    grid-area: content;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: center;
    padding: 1.6rem 5.6rem 3.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    a {
      display: flex;
      align-items: center;
      align-self: flex-start;
      font-size: 2.4rem;

      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      svg {
        font-size: 3.2rem;
      }
    }

    img {
      width: 26.4rem;
      height: 26.4rem;
    }

    h1 {
      font-size: 2.8rem;
      font-weight: 500;
    }

    p {
      font-size: 1.62rem;
      line-height: 1.4;
      text-align: justify;
    }
  }
`

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  padding: 0 2.4rem;
`

export const OrderDetails = styled.div`
  width: 100%;
  margin-top: 4.8rem;
  display: flex;
  gap: 1.6rem;

  & > :nth-child(1) {
    font-size: 2.4rem;
  }
`
