import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { PiX, PiMagnifyingGlass } from 'react-icons/pi'

import { ButtonIcon } from '../ButtonIcon'
import { ButtonText } from '../ButtonText'
import { Input } from '../Input'
import { Footer } from '../Footer'

import { Container, Header, Content } from './styles'

export function SideMeNU({ menuIsOpen, closeMenu, onSearch }) {
  const { signOut } = useAuth()

  const navigate = useNavigate()

  function handleSearchDishes(e) {
    const searchDish = e.target.value

    onSearch(searchDish)
  }

  function handleFavorites() {
    navigate("/favorites")
  }

  return(
    <Container data-menu-is-open={menuIsOpen}>

      <Header>
        <ButtonIcon
          onClick={closeMenu}
          icon={PiX}
        />

        <h3>Menu</h3>
      </Header>

      <main>
        <Content>
          <Input
            icon={PiMagnifyingGlass}
            placeholder="Busque por pratos ou ingredientes"
            onChange={handleSearchDishes}
          />
          
          <div className="line">
            <ButtonText
              onClick={handleFavorites}
            >
              Meus Favoritos
            </ButtonText>
          </div>

          <div className="line">
            <ButtonText
              onClick={signOut}
            >
              Sair
            </ButtonText>
          </div>
        </Content>
      </main>

      <Footer/>
    </Container>
  )
}