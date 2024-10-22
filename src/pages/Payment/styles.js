import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  width: 100%;
  height: 100vh;

  main {
    grid-area: content;
    padding: 3.6rem 2.8rem;
    grid-area: content;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }
`

export const ModalPayment = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_300};
  border-radius: 0.8rem 0.8rem 0.6rem 0.6rem;

  .Payment {
    display: flex;

    button {
      padding: 2.8rem 6rem;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;

      border: none;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background-color: ${({ theme }) => theme.COLORS.DARK_500};

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }

      &:first-child {
        border-radius: 0.8rem 0 0 0;
      }

      &:last-child {
        border-radius: 0 0.8rem 0 0;
      }
    }
  }

  .Method {
    padding: 3.2rem 2.6rem;

    img {
      border-radius: 0.8rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 3.6rem;
    }

    form div {
      margin-top: 0.8rem;
    }

    input {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }

    .wrapper {
      display: flex;
      gap: 3rem;
    }
  }

  .PaymentStatus {

    .paymentMessage {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;

      img {
        width: 9rem;
        height: 9rem; 
      }

      h3 {
        font-size: 2rem;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }

  }
  }
`
