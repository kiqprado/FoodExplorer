import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  img {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
  }

  h1 {
    font-size: ${({ size }) => size}px;
  }

  /*${({ size }) =>
    size &&
    `
      img {
        width: ${size}px;
        height: ${size}px;
      }

      h1 {
        font-size: ${size}px;
      }
    `}*/
`