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

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { PaymentMethodType, useOrders } from '../../contexts/OrderContext'
import { useCoffees } from '../../contexts/CoffeesContext'
import { useNavigate } from 'react-router-dom'

const addressFormValidationScheme = zod.object({
  cep: zod.string().length(9, 'CEP inválido'),
  street: zod.string().min(3, 'A rua precisa ter pelo menos 3 caracteres.'),
  number: zod.string().min(1, 'O número precisa ter pelo menos 1 caracter.'),
  complement: zod.string(),
  district: zod
    .string()
    .min(3, 'O bairro precisa ter pelo menos 3 caracteres.'),
  city: zod.string().min(1, 'A cidade precisa ter pelo menos 1 caracter.'),
  state: zod.string().length(2, 'UF inválida'),
})

export type AddressFormData = zod.infer<typeof addressFormValidationScheme>

export function Checkout() {
  const {
    cartItems,
    paymentMethod,
    setPaymentMethod,
    deliveryAddress,
    setDeliveryAddress,
    confirmOrder,
  } = useOrders()
  const { coffees } = useCoffees()
  const navigate = useNavigate()

  const deliveryFee = cartItems.length > 0 ? 3.5 : 0

  const totalItemsPrice = cartItems
    .map((cartItem) => {
      const coffee = coffees.find((coffee) => coffee.id === cartItem.coffeeId)
      const price = coffee?.price ?? 0
      return cartItem.amount * price
    })
    .reduce((acc, curr) => acc + curr, 0)

  const totalOrderPrice = totalItemsPrice + deliveryFee
  const isDisabledButton = cartItems.length === 0

  const AddressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationScheme),
    defaultValues: {
      cep: deliveryAddress?.cep,
      street: deliveryAddress?.street,
      number: deliveryAddress?.number,
      complement: deliveryAddress?.complement,
      district: deliveryAddress?.district,
      city: deliveryAddress?.city,
      state: deliveryAddress?.state,
    },
  })

  const { register, handleSubmit } = AddressForm

  function handleCompleteOrder(data: AddressFormData) {
    setDeliveryAddress(data)
    confirmOrder()
    navigate('/checkout/success')
  }

  function handlePaymentMethodChange(method: PaymentMethodType) {
    setPaymentMethod(method)
  }

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
          <DeliveryForm
            id="deliveryForm"
            onSubmit={handleSubmit(handleCompleteOrder)}
          >
            <div>
              <DeliveryInput
                type="text"
                width="12.5rem"
                placeholder="CEP"
                {...register('cep')}
              />
            </div>
            <div>
              <DeliveryInput
                type="text"
                placeholder="Rua"
                {...register('street')}
              />
            </div>
            <div>
              <DeliveryInput
                type="text"
                width="12.5rem"
                placeholder="Número"
                {...register('number')}
              />
              <DeliveryInput
                type="text"
                placeholder="Complemento"
                isOptional={true}
                {...register('complement')}
              />
            </div>
            <div>
              <DeliveryInput
                type="text"
                width="12.5rem"
                placeholder="Bairro"
                {...register('district')}
              />
              <DeliveryInput
                type="text"
                placeholder="Cidade"
                {...register('city')}
              />
              <DeliveryInput
                type="text"
                width="3.75rem"
                placeholder="UF"
                {...register('state')}
              />
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
            <PaymentMethod
              isSelected={paymentMethod === 'credit'}
              onClick={() => handlePaymentMethodChange('credit')}
            >
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </PaymentMethod>
            <PaymentMethod
              isSelected={paymentMethod === 'debit'}
              onClick={() => handlePaymentMethodChange('debit')}
            >
              <Money size={16} />
              <span>Cartão de Débito</span>
            </PaymentMethod>
            <PaymentMethod
              isSelected={paymentMethod === 'money'}
              onClick={() => handlePaymentMethodChange('money')}
            >
              <Bank size={16} />
              <span>Dinheiro</span>
            </PaymentMethod>
          </PaymentContainer>
        </CardContainer>
      </div>
      <div>
        <strong>Cafés selecionados</strong>
        <CardContainer hasRoundedEdge>
          {cartItems.map((carItem) => (
            <CoffeeSelected key={carItem.coffeeId} id={carItem.coffeeId} />
          ))}

          <ValuesContainer>
            <span>Total de Itens</span>
            <span>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalItemsPrice)}
            </span>
            <span>Entrega</span>
            <span>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(deliveryFee)}
            </span>
            <strong>Total</strong>
            <strong>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalOrderPrice)}
            </strong>
          </ValuesContainer>

          <ConfirmButton
            type="submit"
            form="deliveryForm"
            disabled={isDisabledButton}
          >
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </CardContainer>
      </div>
    </CheckoutContainer>
  )
}
