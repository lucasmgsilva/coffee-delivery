import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { Location } from './components/Location'
import { Cart } from './components/Cart'
import { useOrders } from '../../contexts/OrderContext'

export function Header() {
  const { deliveryAddress } = useOrders()

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        {deliveryAddress && (
          <Location city={deliveryAddress.city} state={deliveryAddress.state} />
        )}
        <NavLink to="/checkout" title="Carrinho">
          <Cart />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
