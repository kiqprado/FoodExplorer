import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? 'transparent' : theme.COLORS.LIGHT_600};
  color: ${({ theme, $isnew }) =>
    $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
  }

  .btn-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  .btn-del {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > input {
    width: 6.8rem;
    border: none;
    outline: none;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
