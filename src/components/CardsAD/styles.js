import styled from 'styled-components'

export const Container = styled.div``

export const Card = styled.div`
  display: flex;
  margin: 4.4rem 1.6rem 6.2rem;
  padding: 3rem 2rem 2rem 0;

  border-radius: 0.3rem;

  position: relative;

  img {
    position: absolute;
    z-index: 1;
  }

  .about {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.2rem;
  }

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background: linear-gradient(
    360deg,
    rgba(0, 16, 16, 1) 0%,
    rgba(6, 23, 30, 1) 50%,
    rgba(8, 24, 30, 1) 100%
  );

  &.one {
    > img {
      height: 14.3rem;
      bottom: 0;
      left: -2.4rem;
    }

    .about {
      margin-left: 15rem;
    }
  }

  &.two {
    > img {
      width: 22.8rem;
      bottom: 0rem;
      right: -1.4rem;
    }

    .about {
      margin-left: 1.6rem;
      

      text-align: center;
    }

    p {
      max-width: 12rem;
    }
  }

  &.three {
    > img {
      width: 16rem;
      bottom: 0;
      left: 12rem;
    }

    .about {
      flex-direction: row;
      text-align: center;
      align-items: center;
      gap: 16rem;

      h3 {
        margin-left: 1.6rem;
        max-width: 10rem;
      }

      p {
        max-width: 6rem;
      }
    }
  }

  &.four {
    > img {
      height: 12.3rem;
      bottom: 0;
      right: .6rem;
    }

    .about {
      margin-left: 1.6rem;

      p {
        max-width: 18.6rem;
      }
    }
  }
`