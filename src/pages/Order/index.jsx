import { useLocation, useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { DishCardTemplate } from '../../components/DishCardTemplate'
import { OrderTimeStamp } from '../../components/OrderTimeStamp'
import { Button } from '../../components/Button'

import { Container } from './styles'

export function Order() {
  const navigate = useNavigate()

  const location = useLocation()

  const { itemCount, orderItems } = location.state || { itemCount: 0, ordersItems: [] }

  function handleOpenPayment() {
    navigate("/")
  }

  return(
    <Container>
      <Header
        itemCount={itemCount}
      />

      <main>

          <Section
            title={ itemCount > 0 ? "Meu Pedido" : "Histórico de pedidos"}
          >
            { itemCount > 0 ? (
              <>
                {
                  orderItems.map((item, index) => (
                    <DishCardTemplate
                      key={index}
                      data={item}
                      onOrder
                    />
                  ))
                }

                <h4> Total R$: {
                    orderItems.reduce((total, item) => total + item.price, 0).toFixed(2)
                  }
                </h4>

                <Button
                  title="Avançar"
                  oncClick={handleOpenPayment}
                />
              </>
            ) : (
              <>
                <OrderTimeStamp/>
                <OrderTimeStamp/>
              </>
            )}

          </Section>

      </main>

      <Footer/>
    </Container>
  )
}