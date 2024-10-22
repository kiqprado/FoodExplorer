import { useState } from 'react'

import { MdPix } from "react-icons/md"
import { FaCreditCard } from "react-icons/fa6"

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { InputLabel } from "../../components/InputLabel"
import { Footer } from '../../components/Footer'

import QrCode from '../../assets/Nth.svg'
import Timer from '../../assets/Payment/Clock.svg'
import Check from '../../assets/Payment/CheckCircle.svg'
import Prepare from  '../../assets/Payment/ForkKnife.svg'

import { Container, ModalPayment } from './styles'

export function Payment() {
  const [ selectMethod, setSelectMethod ] = useState('PIX')

  const [ paymentStatus, setPaymentStatus ] = useState()

  function handlePayment(e) {
    e.preventDefault()

    setPaymentStatus("Load Payment")

    setTimeout(() => {
      setPaymentStatus("Payment successful")
      setTimeout(() => {
        setPaymentStatus("Run it")
      }, 5000)
    }, 5000)
  }

  return(
    <Container>
      <Header/>

      <main>
        <Section
          title="Pagamentos"
        />

        <ModalPayment>
          <div className="Payment">
            <Button
              title='PIX'
              icon={MdPix}
              onClick={() => setSelectMethod('PIX')}
              active={(selectMethod === 'PIX').toString()}
            />

            <Button
              title='Crédito'
              icon={FaCreditCard}
              onClick={() => setSelectMethod('Crédito')}
              active={(selectMethod === 'Crédito').toString()}
            />
          </div>

          <div className="Method">
            { paymentStatus ? (
              <div className="PaymentStatus">
                {
                  paymentStatus === "Load Payment" && (

                    <div className="paymentMessage">
                      <img src={Timer} alt="Timer Icon" />
                      <h3>Aprovando a transação...</h3>
                    </div>
                  )
                }

                {
                  paymentStatus === "Payment successful" && (

                    <div className="paymentMessage">
                      <img src={Check} alt="Check Icon" />
                      <h3>Pagamento aprovado!</h3>
                    </div>
                  )
                }

                {
                  paymentStatus === "Run it" && (

                    <div className="paymentMessage">
                      <img src={Prepare} alt="Prepare Order Icon" />
                      <h3>Pedido em preparação.</h3>
                    </div>
                  )
                }
              </div>
            ) : (
              selectMethod === 'PIX' ? (
                <img src={QrCode} alt="QR Code" />
              ) : (
                <form action="">

                  <InputLabel title="Número do cartão">
                    <Input placeholder="0000 0000 0000 0000" />
                  </InputLabel>

                  <div className="wrapper">

                    <InputLabel title="Validade">
                      <Input placeholder="04/25" />
                    </InputLabel>

                    <InputLabel title="CVC">
                      <Input placeholder="000" />
                    </InputLabel>

                  </div>

                  <Button
                    type="submit"
                    title="Finalizar pagamento"
                    onClick={handlePayment}
                  />

                </form>
              )
            )}
          </div>
        </ModalPayment>
      </main>

      <Footer />

    </Container>
  )
}

