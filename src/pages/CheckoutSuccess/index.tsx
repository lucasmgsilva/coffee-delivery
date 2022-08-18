import { CheckoutSuccessContainer, SuccessInfoContainer } from './styles'
import imageDeliveryman from '../../assets/deliveryman.svg'
import { Item } from '../../components/Introduction/Item'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function CheckoutSuccess() {
  return (
    <CheckoutSuccessContainer>
      <div>
        <strong>Uhu! Pedido confirmado</strong>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </div>
      <SuccessInfoContainer>
        <div>
          <Item
            title={[
              { type: 'normal', text: 'Entrega em ' },
              { type: 'strong', text: 'Rua João Daniel Martinelli, 102' },
            ]}
            subtitle={[{ type: 'normal', text: 'Farrapos - Porto Alegre, RS' }]}
            bgColor="purple"
          >
            <MapPin weight="fill" />
          </Item>
          <Item
            title={[{ type: 'normal', text: 'Previsão de entrega' }]}
            subtitle={[{ type: 'strong', text: '20 min - 30 min' }]}
            bgColor="yellow"
          >
            <Timer weight="fill" />
          </Item>
          <Item
            title={[{ type: 'normal', text: 'Pagamento na entrega' }]}
            subtitle={[{ type: 'strong', text: 'Cartão de Crédito' }]}
            bgColor="yellowDark"
          >
            <CurrencyDollar weight="fill" />
          </Item>
        </div>
        <img src={imageDeliveryman} alt="Entregador" />
      </SuccessInfoContainer>
    </CheckoutSuccessContainer>
  )
}
