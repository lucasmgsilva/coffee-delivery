import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { AddressFormData } from '../pages/Checkout'
import { CartItem, ordersReducer } from '../reducers/orders/reducer'
import {
  addAmountCoffeeToCartAction,
  confirmOrderAction,
  removeAmountCoffeeFromCartAction,
  removeCoffeeFromCartAction,
  setDeliveryAddressAction,
  setPaymentMethodAction,
} from '../reducers/orders/actions'

export type PaymentMethodType = 'credit' | 'debit' | 'money'

interface OrderContextData {
  cartItems: CartItem[]
  paymentMethod: PaymentMethodType
  deliveryAddress?: AddressFormData
  addAmountCoffeeToCart: (item: CartItem) => void
  removeAmountCoffeeFromCart: (coffeeId: number) => void
  removeCoffeeFromCart: (coffeeId: number) => void
  setPaymentMethod: (method: PaymentMethodType) => void
  setDeliveryAddress: (address: AddressFormData) => void
  confirmOrder: () => void
}

export const OrderContext = createContext({} as OrderContextData)

interface OrderProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderProviderProps) {
  const [ordersState, dispatch] = useReducer(
    ordersReducer,
    {
      cartItems: [],
      deliveryAddress: undefined,
      paymentMethod: 'credit',
    },
    () => {
      const storageStateAsJSON = localStorage.getItem(
        '@coffee-delivery:order-state-1.0.0',
      )

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return {
        cartItems: [],
        deliveryAddress: undefined,
        paymentMethod: 'credit',
      }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(ordersState)

    localStorage.setItem('@coffee-delivery:order-state-1.0.0', stateJSON)
  }, [ordersState])

  const { cartItems, paymentMethod, deliveryAddress } = ordersState

  function addAmountCoffeeToCart(item: CartItem) {
    dispatch(addAmountCoffeeToCartAction(item))
  }

  function removeAmountCoffeeFromCart(coffeeId: number) {
    dispatch(removeAmountCoffeeFromCartAction(coffeeId))
  }

  function removeCoffeeFromCart(coffeeId: number) {
    dispatch(removeCoffeeFromCartAction(coffeeId))
  }

  function setPaymentMethod(method: 'credit' | 'debit' | 'money') {
    dispatch(setPaymentMethodAction(method))
  }

  function setDeliveryAddress(address: AddressFormData) {
    dispatch(setDeliveryAddressAction(address))
  }

  function confirmOrder() {
    dispatch(confirmOrderAction())
  }

  return (
    <OrderContext.Provider
      value={{
        cartItems,
        paymentMethod,
        deliveryAddress,
        addAmountCoffeeToCart,
        removeAmountCoffeeFromCart,
        removeCoffeeFromCart,
        setPaymentMethod,
        setDeliveryAddress,
        confirmOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrders = () => useContext(OrderContext)
