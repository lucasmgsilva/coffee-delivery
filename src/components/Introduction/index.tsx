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
          <Item
            title={[{ type: 'normal', text: 'Compra simples e segura' }]}
            bgColor="yellowDark"
          >
            <ShoppingCart weight="fill" />
          </Item>
          <Item
            title={[
              { type: 'normal', text: 'Embalagem mantém o café intacto' },
            ]}
            bgColor="brown"
          >
            <Package weight="fill" />
          </Item>
          <Item
            title={[{ type: 'normal', text: 'Entrega rápida e rastreada' }]}
            bgColor="yellow"
          >
            <Timer weight="fill" />
          </Item>
          <Item
            title={[
              { type: 'normal', text: 'O café chega fresquinho até você' },
            ]}
            bgColor="purple"
          >
            <Coffee weight="fill" />
          </Item>
        </ItemsContainer>
      </div>
      <img src={imageCupOfCoffee} alt="Copo de café" />
    </IntroductionContainer>
  )
}
