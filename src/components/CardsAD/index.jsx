import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

import { Container, Card } from './styles'

import CardImgOne from '../../assets/CardAd/CardElementsOne.png'
import CardImgTwo from '../../assets/CardAd/CardElementsTwo.png'
import CardImgThree from '../../assets/CardAd/CardElementsThree.png'
import CardImgFour from '../../assets/CardAd/CardElementsFour.png'

export function CardsAD() {

  const cards = [
    {
      title: 'Sabores inigualáveis',
      description: 'Sinta o cuidado do preparo com ingredientes selecionados.',
      img: CardImgOne,
      className: 'one'
    },
    {
      title: 'Detalhes',
      description: 'O sabor que nos traz boas lembranças.',
      img: CardImgTwo,
      className: 'two'
    },
    {
      title: 'Da colheita à Mesa',
      description: 'Respeito e gratidão com a sua alimentação.',
      img: CardImgThree,
      className: 'three'
    },
    {
      title: 'Em poucos cliques',
      description: 'A sua pausa perfeita na correria do dia-a-dia!',
      img: CardImgFour,
      className: 'four'
    },
  ]

  return(
    <Container>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card className={card.className}>
              <img src={card.img} alt="" />
              <div className="about">
                <h3>{card.title}</h3>
                <p>{card.description}</p> 
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </Container>
  )
} 