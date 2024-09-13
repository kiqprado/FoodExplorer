import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { PiReceipt, PiList } from 'react-icons/pi'

import { Logo } from '../logo'
import { ButtonIcon } from '../ButtonIcon'
import { SideMenu } from '../SideMenu'

import { Container, OrderSection } from './styles'

export function Header({ setSearch, itemCount, orderItems }) {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  const navigate = useNavigate()

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  function handleClientOrder() {
    navigate('/order', { state: { itemCount, orderItems}})
  }

  return(
    <Container>
        <SideMenu
          menuIsOpen={isMenuOpen}
          closeMenu={() => setIsMenuOpen(false)}
          onSearch={setSearch}
        />

        <ButtonIcon
          onClick={toggleMenu}
          icon={PiList}
        />

        <Logo
          size={22}
        />

        <OrderSection>

          <span>{String(itemCount).padStart(2, '0')}</span>

          <ButtonIcon
            onClick={handleClientOrder}
            icon={PiReceipt}
          />
          
        </OrderSection>

    </Container>
  )
}