import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { PiHeart } from 'react-icons/pi'
import { FcLike } from 'react-icons/fc'

import { Container, Details } from './styles'

import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'
import { ButtonIcon } from '../../components/ButtonIcon'

import dishPlaceHolder from '../../assets/dishPlaceHolder.svg'

export function DishCard({ data, onDetailsClick, addItem, ...rest}) {
  const [ favorite, setIsFavorite ] = useState(false)
  const [ quantity, setQuantity ] = useState(1)

  const { user } = useAuth()

  const dishAvatar = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : dishPlaceHolder

  async function handleNewFavorite() {
    try {
      await api.post('/favorites', {
        dish_id: data.id,
        user_id: user.id
      })

      setIsFavorite(!favorite)
    } catch (error) {
      alert('Erro ao adicionar aos favoritos')
      console.log('Operação de adição aos favoritos não concluída: ', error)
      
    }
  }

  function handleAddDishToOrder() {
    addItem(quantity)
  }

  return(
    <Container
      {...rest}
    >
      <ButtonIcon
        icon={favorite ? FcLike : PiHeart }
        onClick={handleNewFavorite}
      />

      <Details
        onCLick={onDetailsClick}
      >
        <img src={dishAvatar} alt={data.title} />

        <h4>{data.title}</h4>

        <span>R$ {data.price}</span>
      </Details>

      <Quantity
        quantity={quantity}
        setQuantity={setQuantity}
      />

      <Button
        title='incluir'
        onClick={handleAddDishToOrder}
      />

    </Container>
  )
}