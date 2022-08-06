import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Coffee } from '../../components/CoffeeList'
import { CardHeader } from './CardHeader'
import { CoffeeSelected } from './CoffeeSelected'
import {
  CardContainer,
  CheckoutContainer,
  ConfirmButton,
  DeliveryForm,
  DeliveryInput,
  PaymentContainer,
  PaymentMethod,
  ValuesContainer,
} from './styles'

export function Checkout() {
  const [selectedCoffees, setSelectedCoffees] = useState<Coffee[]>([
    {
      id: uuidv4(),
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      categories: ['tradicional'],
      image: 'coffees/expresso.svg',
    },
    {
      id: uuidv4(),
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      categories: ['tradicional'],
      image: 'coffees/americano.svg',
    },
  ])

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
              <DeliveryInput
                type="text"
                placeholder="Complemento"
                isOptional={true}
              />
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
            <PaymentMethod isSelected={true}>
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
      <div>
        <strong>Cafés selecionados</strong>
        <CardContainer hasRoundedEdge>
          {selectedCoffees.map((coffee) => (
            <CoffeeSelected
              key={coffee.id}
              image={coffee.image}
              title={coffee.title}
              price={coffee.price}
            />
          ))}

          <ValuesContainer>
            <span>Total de Itens</span>
            <span>R$ 29,70</span>
            <span>Entrega</span>
            <span>R$ 3,50</span>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </ValuesContainer>

          <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
        </CardContainer>
      </div>
    </CheckoutContainer>
  )
}
