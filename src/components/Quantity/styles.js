import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`