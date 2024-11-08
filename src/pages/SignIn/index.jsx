import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { Container, Form } from './styles'
import { Logo } from '../../components/Logo'
import { InputLabel } from '../../components/InputLabel'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return(
    <Container>
      <Form>

        <Logo
          size={38}
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
          title="Entrar"
          onClick={handleSignIn}
        />

        <Link to="/register">
          Criar uma conta
        </Link>

      </Form>
    </Container>
  )
}