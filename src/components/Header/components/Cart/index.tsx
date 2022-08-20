import { ShoppingCart } from 'phosphor-react'
import { useOrders } from '../../../../contexts/OrderContext'
import { CartContainer } from './styles'

export function Cart() {
  const { cartItems } = useOrders()

  const amount = cartItems.reduce((acc, item) => acc + item.amount, 0)

  return (
    <CartContainer amount={amount}>
      <ShoppingCart size={22} weight="fill" />
    </CartContainer>
  )
}
