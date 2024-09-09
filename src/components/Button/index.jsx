import { Container } from 'styled-components'

export function Button({ icon: Icon, title, ...rest}){
  return(
    <Container
      type="button"
      {...rest}
    >
      {Icon && <Icon size={24}/>}
      {title}
    </Container>
  )
}