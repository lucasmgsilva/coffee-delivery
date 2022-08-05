import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { Location } from './components/Location'
import { Cart } from './components/Cart'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <Location />
        <NavLink to="/checkout" title="Carrinho">
          <Cart />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
