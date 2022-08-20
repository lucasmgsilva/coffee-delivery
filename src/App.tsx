import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeesContextProvider } from './contexts/CoffeesContext'
import { OrderContextProvider } from './contexts/OrderContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesContextProvider>
        <OrderContextProvider>
          <BrowserRouter>
            <Router />
            <GlobalStyle />
          </BrowserRouter>
        </OrderContextProvider>
      </CoffeesContextProvider>
    </ThemeProvider>
  )
}
