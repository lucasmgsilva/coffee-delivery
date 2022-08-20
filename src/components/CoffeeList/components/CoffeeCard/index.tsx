import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Category } from '../../../../contexts/CoffeesContext'
import { useOrders } from '../../../../contexts/OrderContext'
import { CategoryTag } from '../CategoryTag'
import {
  ActionButton,
  ActionsContainer,
  BuyContainer,
  CartButton,
  CategoriesContainer,
  CoffeeCardContainer,
  CoffeeImage,
  CounterContainer,
} from './styles'

interface CoffeeCardProps {
  id: string
  image: string
  title: string
  description: string
  price: number
  categories: Category[]
}

export function CoffeeCard({
  id,
  image,
  title,
  description,
  price,
  categories,
}: CoffeeCardProps) {
  const { addAmountCoffeeToCart } = useOrders()

  const [amount, setAmount] = useState(1)

  function addOneToTheAmount() {
    if (amount < 99) {
      setAmount((state) => state + 1)
    }
  }

  function removeOneFromTheAmount() {
    if (amount > 1) {
      setAmount((state) => state - 1)
    }
  }

  function handleAddAmountCoffeeToCart() {
    addAmountCoffeeToCart({ coffeeId: id, amount })
    toast.success('Café adicionado ao carrinho com sucesso!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })
    setAmount(1)
  }

  return (
    <CoffeeCardContainer>
      <CoffeeImage src={image} />

      <CategoriesContainer>
        {categories.map((category) => (
          <CategoryTag key={category} category={category} />
        ))}
      </CategoriesContainer>

      <strong>{title}</strong>
      <span>{description}</span>
      <BuyContainer>
        <div>
          <span>R$&nbsp;</span>
          <strong>{price.toFixed(2).replace('.', ',')}</strong>
        </div>

        <ActionsContainer>
          <CounterContainer>
            <ActionButton onClick={removeOneFromTheAmount}>
              <Minus size={14} />
            </ActionButton>
            <span>{amount}</span>
            <ActionButton onClick={addOneToTheAmount}>
              <Plus size={14} />
            </ActionButton>
          </CounterContainer>
          <CartButton onClick={handleAddAmountCoffeeToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </ActionsContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
