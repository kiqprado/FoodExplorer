import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { api } from '../../services/api'

import { PiCaretLeft} from 'react-icons/pi'

import { Container, Ingredients, OrderDetails } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'
import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'

import dishPlaceholder from '../../assets/dishPlaceholder.svg'

export function Dish() {
  const [ data, setData ] = useState(null)

  const [ quantity, setQuantity ] = useState(1)

  const [ itemCount, setItemCount ] = useState(0)
  const [ orderItems, setOrderItems ] = useState([])

  const params = useParams()
  const navigate = useNavigate()

  function handleAddItem(dish, quantity ) {
    setItemCount(prevCount => prevCount + quantity)
    setOrderItems(prevItems => [...prevItems, ...Array(quantity).fill(dish)])
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }

    function handleBack() {
    navigate(-1)
    }

    fetchDish()
    handleBack()
  }, [params.id])

  if(!data) {
    return <div>Carregando o seu prato...</div>
  }

  const dishAvatar = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : dishPlaceholder

  return (
    <Container>

      <Header
        itemCount={itemCount}
        setItemCount={setItemCount}
        orderItems={orderItems}
      />

      { 
        data &&

        <main>

          <Link to="/">
            <PiCaretLeft/> voltar
          </Link>

          <img src={dishAvatar} alt={data.title} />

          <h1>{data.title}</h1>

          <p>{data.description}</p>

          {
            data.ingredients &&

            <Ingredients>
              {data.ingredients.map(ingredient => (
                <Tag 
                  key={String(ingredient.id)} 
                  title={ingredient.title} 
                />
              ))}
            </Ingredients>
          }

          <OrderDetails>
            <Quantity
              quantity={quantity}
              setQuantity={setQuantity}
            />

            <Button
              title="Pedir"
              onClick={handleAddItem}
            />
          </OrderDetails>

        </main>
      }
    </Container>
  )
}