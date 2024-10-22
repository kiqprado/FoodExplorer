import { useState } from 'react'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { DishCardTemplate } from '../../components/DishCardTemplate'
import { Footer } from '../../components/Footer'

import { Container } from './styles'

export function Favorites() {
  const [ itemCount, setItemCount ] = useState(0)
  const [ orderItems, setOrderItems ] = useState([])

  return(
    <Container>
      <Header
        itemCount={itemCount}
        setItemCount={setItemCount}
        orderItems={orderItems}
      />

      <main>
        <Section
          title="Meus Favoritos"
        >
          <DishCardTemplate/>
          <DishCardTemplate/>
          <DishCardTemplate/>
          <DishCardTemplate/>
        
        </Section>
      </main>

      <Footer/>
    </Container>
  )
}