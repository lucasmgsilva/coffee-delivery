import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { Category } from '../..'
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
  image: string
  title: string
  description: string
  price: number
  categories: Category[]
}

export function CoffeeCard({
  image,
  title,
  description,
  price,
  categories,
}: CoffeeCardProps) {
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
            <ActionButton>
              <Minus size={14} />
            </ActionButton>
            <span>1</span>
            <ActionButton>
              <Plus size={14} />
            </ActionButton>
          </CounterContainer>
          <CartButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </ActionsContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
