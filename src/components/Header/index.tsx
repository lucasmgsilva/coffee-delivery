import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { Location } from './components/Location'
import { Cart } from './components/Cart'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <NavLink to="/" title="Localização">
          <Location />
        </NavLink>
        <NavLink to="/" title="Carrinho">
          <Cart />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
