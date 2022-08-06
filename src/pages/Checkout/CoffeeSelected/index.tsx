import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ActionButton,
  CounterContainer,
} from '../../../components/CoffeeList/components/CoffeeCard/styles'
import {
  ActionsContainer,
  CoffeeSelectedContainer,
  DetailsContainer,
  Divider,
  InfoContainer,
  RemoveButton,
} from './styles'

interface CoffeeSelectedProps {
  image: string
  title: string
  price: number
}

export function CoffeeSelected({ image, title, price }: CoffeeSelectedProps) {
  return (
    <>
      <CoffeeSelectedContainer>
        <InfoContainer>
          <img src={image} alt={title} />
          <DetailsContainer>
            <span>{title}</span>
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
              <RemoveButton>
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
          }).format(price)}
        </strong>
      </CoffeeSelectedContainer>

      <Divider />
    </>
  )
}
