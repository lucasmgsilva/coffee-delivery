import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { CardHeader } from './CardHeader'
import {
  CardContainer,
  CheckoutContainer,
  DeliveryForm,
  DeliveryInput,
  PaymentContainer,
  PaymentMethod,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <strong>Complete seu pedido</strong>
        <CardContainer>
          <CardHeader
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPinLine />}
            iconColor="yellowDark"
          />
          <DeliveryForm>
            <div>
              <DeliveryInput type="text" width="12.5rem" placeholder="CEP" />
            </div>
            <div>
              <DeliveryInput type="text" placeholder="Rua" />
            </div>
            <div>
              <DeliveryInput type="text" width="12.5rem" placeholder="Número" />
              <DeliveryInput type="text" placeholder="Complemento" />
            </div>
            <div>
              <DeliveryInput type="text" width="12.5rem" placeholder="Bairro" />
              <DeliveryInput type="text" placeholder="Cidade" />
              <DeliveryInput type="text" width="3.75rem" placeholder="UF" />
            </div>
          </DeliveryForm>
        </CardContainer>
        <CardContainer>
          <CardHeader
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar />}
            iconColor="purple"
          />
          <PaymentContainer>
            <PaymentMethod>
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </PaymentMethod>
            <PaymentMethod>
              <Money size={16} />
              <span>Cartão de Débito</span>
            </PaymentMethod>
            <PaymentMethod>
              <Bank size={16} />
              <span>Dinheiro</span>
            </PaymentMethod>
          </PaymentContainer>
        </CardContainer>
      </div>
      <div></div>
    </CheckoutContainer>
  )
}
