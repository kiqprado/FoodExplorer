import { Container } from './styles'
 
import { Logo } from '../Logo'

export function Footer() {
  return(
    <Container>
      <Logo
        size={15}
        isFooter={true}
      />

      <span> © 2024 - Todos os direitos reservados. </span>

    </Container>
  )
}