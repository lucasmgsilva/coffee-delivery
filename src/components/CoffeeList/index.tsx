import { ToastContainer } from 'react-toastify'
import { useCoffees } from '../../contexts/CoffeesContext'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeListContainer, CoffeesContainer } from './styles'

export function CoffeeList() {
  const { coffees } = useCoffees()

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeesContainer>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            title={coffee.title}
            description={coffee.description}
            price={coffee.price}
            categories={coffee.categories}
            image={coffee.image}
          />
        ))}
      </CoffeesContainer>
    </CoffeeListContainer>
  )
}
