import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.6rem 2rem;
  margin-bottom: 1.8rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_700};
  border-radius: 0.8rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1.4rem;

  .detailsOnOrder {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .status {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      .statusColor {
        height: 0.1rem;
        width: 0.1rem;
        padding: 0.4rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      }
    }
  }
`
