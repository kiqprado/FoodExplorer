import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 0.8rem;
  position: relative;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  svg {
    position: absolute;
    right: 1.6rem;
  }
`

export const Select = styled.select`
  width: 100%;
  padding: 1.6rem;

  border: none;
  border-radius: 0.8rem;

  appearance: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  &:focus {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  &.selected {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }
`
