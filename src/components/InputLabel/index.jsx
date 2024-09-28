import { Container } from './styles'

export function InputLabel({ children, title, ...rest}) {
  return(
    <Container
      {...rest}
    >
      { title && <span>{title}</span>}
      {children}
    </Container>
  )
}