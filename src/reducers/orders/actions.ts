import { PaymentMethodType } from '../../contexts/OrderContext'
import { AddressFormData } from '../../pages/Checkout'
import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_AMOUNT_COFFEE_TO_CART = 'ADD_AMOUNT_COFFEE_TO_CART',
  REMOVE_AMOUNT_COFFEE_FROM_CART = 'REMOVE_AMOUNT_COFFEE_FROM_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD',
  SET_DELIVERY_ADDRESS = 'SET_DELIVERY_ADDRESS',
  CONFIRM_ORDER = 'CONFIRM_ORDER',
}

export function addAmountCoffeeToCartAction(item: CartItem) {
  return { type: ActionTypes.ADD_AMOUNT_COFFEE_TO_CART, payload: { item } }
}

export function removeAmountCoffeeFromCartAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_AMOUNT_COFFEE_FROM_CART,
    payload: { coffeeId },
  }
}

export function removeCoffeeFromCartAction(coffeeId: number) {
  return { type: ActionTypes.REMOVE_COFFEE_FROM_CART, payload: { coffeeId } }
}

export function setPaymentMethodAction(method: PaymentMethodType) {
  return { type: ActionTypes.SET_PAYMENT_METHOD, payload: { method } }
}

export function setDeliveryAddressAction(address: AddressFormData) {
  return { type: ActionTypes.SET_DELIVERY_ADDRESS, payload: { address } }
}

export function confirmOrderAction() {
  return { type: ActionTypes.CONFIRM_ORDER }
}
