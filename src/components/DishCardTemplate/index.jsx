import { Container, Details, Link }  from './styles'

import DishImg from '../../assets/dish.png'

export function DishCardTemplate({ data, onOrder, ...rest }) {
  return(
    <Container
      {...rest}
    >
      <img src={DishImg} alt={data.title}/>

      <Details>
        <h3>{data.title}</h3>

        <Link>
          {onOrder ? 'Remover dos peidos' : 'Remover dos favoritos'}
        </Link>
      </Details>
    </Container>
  )
}