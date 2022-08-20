import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ActionButton,
  CounterContainer,
} from '../../../components/CoffeeList/components/CoffeeCard/styles'
import { useCoffees } from '../../../contexts/CoffeesContext'
import { useOrders } from '../../../contexts/OrderContext'
import {
  ActionsContainer,
  CoffeeSelectedContainer,
  DetailsContainer,
  Divider,
  InfoContainer,
  RemoveButton,
} from './styles'

interface CoffeeSelectedProps {
  id: string
}

export function CoffeeSelected({ id }: CoffeeSelectedProps) {
  const {
    cartItems,
    addAmountCoffeeToCart,
    removeAmountCoffeeFromCart,
    removeCoffeeFromCart,
  } = useOrders()
  const { coffees } = useCoffees()

  const coffee = coffees.find((coffee) => coffee.id === id)
  const cartItem = cartItems.find((cartItem) => cartItem.coffeeId === id)

  const totalPrice = (coffee?.price ?? 0) * (cartItem?.amount ?? 0)

  function handleAddAmountCoffeeToCart() {
    addAmountCoffeeToCart({ coffeeId: id, amount: 1 })
  }

  function handleRemoveAmountCoffeeFromCart() {
    removeAmountCoffeeFromCart(id)
  }

  function handleRemoveCoffeeFromCart() {
    removeCoffeeFromCart(id)
  }

  return (
    <>
      <CoffeeSelectedContainer>
        <InfoContainer>
          <img src={coffee?.image} alt={coffee?.title} />
          <DetailsContainer>
            <span>{coffee?.title}</span>
            <ActionsContainer>
              <CounterContainer>
                <ActionButton onClick={handleRemoveAmountCoffeeFromCart}>
                  <Minus size={14} />
                </ActionButton>
                <span>{cartItem?.amount}</span>
                <ActionButton onClick={handleAddAmountCoffeeToCart}>
                  <Plus size={14} />
                </ActionButton>
              </CounterContainer>
              <RemoveButton onClick={handleRemoveCoffeeFromCart}>
                <Trash size={16} />
                REMOVER
              </RemoveButton>
            </ActionsContainer>
          </DetailsContainer>
        </InfoContainer>
        <strong>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalPrice)}
        </strong>
      </CoffeeSelectedContainer>

      <Divider />
    </>
  )
}
