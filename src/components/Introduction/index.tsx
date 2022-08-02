import { IntroductionContainer, ItemsContainer } from './styles'
import imageCupOfCoffee from '../../assets/cup-of-coffee.svg'
import { Item } from './Item'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Introduction() {
  return (
    <IntroductionContainer>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </div>
        <ItemsContainer>
          <Item description="Compra simples e segura" bgColor="yellowDark">
            <ShoppingCart />
          </Item>
          <Item description="Embalagem mantém o café intacto" bgColor="brown">
            <Package />
          </Item>
          <Item description="Entrega rápida e rastreada" bgColor="yellow">
            <Timer />
          </Item>
          <Item description="O café chega fresquinho até você" bgColor="purple">
            <Coffee />
          </Item>
        </ItemsContainer>
      </div>
      <img src={imageCupOfCoffee} alt="Copo de café" />
    </IntroductionContainer>
  )
}
