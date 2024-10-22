import styled from 'styled-components'

export const Container = styled.aside`
  display: grid;
  grid-template-rows: 10rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  width: 100%;
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 2;
  display: none;

  main {
    padding: 3.6rem 2.8rem;
    grid-area: content;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }

  &[data-menu-is-open='true'] {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 4.4rem 2.4rem 2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  div:nth-child(1) {
    margin-bottom: 3.6rem;
  }

  .line {
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
`