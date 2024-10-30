import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { PiCaretDown, PiCaretLeft} from 'react-icons/pi'

import { Container, Form, StuffTags } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { InputImg } from '../../components/InputImg'
import { InputLabel } from '../../components/InputLabel'
import { InputSelect } from '../../components/InputSelect'
import { DishStuff } from '../../components/DishStuff'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'

export function NewDish() {
  const [ avatar, setAvatar] = useState(null)

  const [ title, setTitle ] = useState("")
  const [ category, setCategory ] = useState("")

  const [ ingredients, setIngredients ] = useState([])
  const [ newIngredient, setNewIngredient ] = useState("")

  const [ price, setPrice ] = useState("")
  const [ description, setDescription ] = useState("")

  const navigate = useNavigate()

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

async function handleNewDish() {
  if(!title) {
    alert("Os Pratos devem possuir um Nome para serem adicionados ao catalogo.")
  }
  
  if(newIngredient) {
    alert("Existe um ingrediente no campo preenchido mas não adicionado a lista, adicione ou exclua o mesmo.")
  }
  if(!price) {
    alert("Informe o valor do seu Prato.")
  }

  if(avatar) {
    const fileUploadForm = new FormData()
    fileUploadForm.append('avatar', avatar)

    const response = await api.patch('/dishes/avatar', fileUploadForm)
    const avatarFilename = response.data.filename

    await api.post("/dishes", {
      title,
      category_name: category,
      ingredients,
      price,
      description,
      avatar: avatarFilename
    })

    alert("Prato cadastrado com sucesso!")
    navigate('/')
  }
}

  return(
    <Container>
      <Header/>
      
      <main> 
        <Link to="/">
           <PiCaretLeft/> voltar
        </Link> 
        <Form>  

          <h2>Novo Prato</h2>

          <div className="inputs">
          <InputLabel
            title="Imagem do prato"
            htmlFor="dishName"
          />
          <InputImg
            title="Selecione a imagem"
            onChange={e => setAvatar(e.target.files[0])}
          />
          </div>

          <div className="inputs">
          <InputLabel
            title="Nome"
            htmlFor="dishTitle"
          />
          <Input
            id="dishTitle"
            type="text"
            placeholder="Ex: Salada Ceasar"
            onChange={e => setTitle(e.target.value)}
          />
          </div>

          <div className="inputs">
          <InputLabel
            title="Categoria"
            htmlFor="dishCategory"
          />
          <InputSelect
            id="dishCategory"
            type="text"
            icon={PiCaretDown}
            onChange={e => setCategory(e.target.value)}
          />
          </div>

          <div className="inputs">
          <InputLabel
            title="Ingredientes"
          />
          <StuffTags>
            {
              ingredients.map((ingredient, index) => (
                <DishStuff
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))
            }

            <DishStuff
              isNew
              placeholder="Adicionar"
              value={newIngredient}
              onChange={e => setNewIngredient(e.target.value)}
              onClick={handleAddIngredient}
            />
          </StuffTags>
          </div>

          <div className="inputs">
          <InputLabel
            title="Preço"
            htmlFor="dishPrice"
          />
          <Input
            id="dishPrice"
            type="number"
            placeholder="R$ 00,00"
            onChange={e => setPrice(e.target.value)}
          />
          </div>

          <div className="inputs">
          <InputLabel
            title="Descrição"
            htmlFor="dishDescription"
          />
          <Textarea
            id="dishDescription"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição..."
            onChange={e => setDescription(e.target.value)}
          />
          </div>

          <Button
            title="Salvar alterações"
            onClick={handleNewDish}
          />
      </Form>
      </main>

      <Footer/>
    </Container>
  )
}