import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Container, Form } from './styles'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { InputLabel } from '../../components/InputLabel'
import { Button } from '../../components/Button'

export function SignUp() {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Por favor, preencha todos os campos!")
    }

    api.post('/users', {
      name,
      email,
      password
    }).then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    }).catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar este usuário.")
      }
    })
  }


  return(
    <Container>
      <Form>
        <Logo
          size={38}
        />

        <InputLabel
          title="Seu nome"
          htmlFor="nameInput"
        />
        <Input
          id="nameInput"
          placeholder="Ex: Socorro Jesus"
          type="text"
          onChange={e => setName(e.target.value)}
        />

        <InputLabel
          title="Email"
          htmlFor="emailInput"
        />
        <Input
          id="emailInput"
          placeholder="Ex@exemplo.com"
          type="email"
          onChange={e => setEmail(e.target.value)}
        />

        <InputLabel
          title="Senha"
          htmlFor="passwordInput"
        />
        <Input
          id="passwordInput"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Criar conta"
          onClick={handleSignUp}
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}