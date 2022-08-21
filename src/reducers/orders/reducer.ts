import { ActionTypes } from './actions'
import { produce } from 'immer'
import { AddressFormData } from '../../pages/Checkout'

export interface CartItem {
  coffeeId: number
  amount: number
}

interface OrderState {
  cartItems: CartItem[]
  paymentMethod: 'debit' | 'credit' | 'money'
  deliveryAddress?: AddressFormData
}

export function ordersReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_AMOUNT_COFFEE_TO_CART:
      return produce(state, (draft) => {
        const cartItem = draft.cartItems.find(
          (item) => item.coffeeId === action.payload.item.coffeeId,
        )

        if (cartItem) {
          cartItem.amount += action.payload.item.amount
        } else {
          draft.cartItems.push({
            coffeeId: action.payload.item.coffeeId,
            amount: action.payload.item.amount,
          })
        }
      })

    case ActionTypes.REMOVE_AMOUNT_COFFEE_FROM_CART:
      return produce(state, (draft) => {
        const cartItem = draft.cartItems.find(
          (item) => item.coffeeId === action.payload.coffeeId,
        )

        if (cartItem) {
          if (cartItem.amount > 1) {
            cartItem.amount--
          } else {
            draft.cartItems = draft.cartItems.filter(
              (item) => item.coffeeId !== action.payload.coffeeId,
            )
          }
        }
      })

    case ActionTypes.REMOVE_COFFEE_FROM_CART:
      return produce(state, (draft) => {
        draft.cartItems = draft.cartItems.filter(
          (item) => item.coffeeId !== action.payload.coffeeId,
        )
      })

    case ActionTypes.SET_PAYMENT_METHOD:
      return produce(state, (draft) => {
        draft.paymentMethod = action.payload.method
      })

    case ActionTypes.SET_DELIVERY_ADDRESS:
      return produce(state, (draft) => {
        const { cep, street, number, complement, district, city, state } =
          action.payload.address
        draft.deliveryAddress = {
          cep,
          street,
          number,
          complement,
          district,
          city,
          state,
        }
      })

    case ActionTypes.CONFIRM_ORDER:
      return produce(state, (draft) => {
        draft.cartItems = []
      })

    default:
      return state
  }
}
