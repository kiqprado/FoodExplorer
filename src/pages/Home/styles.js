import styled from 'styled-components'
import { Swiper as ReactSwiper } from 'swiper/react'

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
    overflow-y: auto;
  }
`

export const Content = styled.div`
  padding: 0 2.4rem 2.4rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const CustomSwiper = styled(ReactSwiper)`
  width: 100%;

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 30rem;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }

    .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
    }

    .swiper-3d .swiper-slide-shadow-right {
      background-image: none;
    }
  }

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`
