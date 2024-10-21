import { Container } from './styles'

export function OrderTimeStamp() {
  return(
    <Container>
      <div className="detailsOnOrder">

        <span>00004</span>

        <div className="status">
          <span className="statusColor"></span>
          <h5>Pendente</h5>
        </div>

        <div className="dateTime">
          <span>20/05 ás 18h00</span>
        </div>

      </div>

      <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
    </Container>
  )
}