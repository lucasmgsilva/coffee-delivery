import { useState } from 'react'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeListContainer, CoffeesContainer } from './styles'
import { v4 as uuidv4 } from 'uuid'

export type Category =
  | 'tradicional'
  | 'especial'
  | 'com leite'
  | 'alcoólico'
  | 'gelado'

export interface Coffee {
  id: string
  title: string
  description: string
  price: number
  categories: Category[]
  image: string
}

export function CoffeeList() {
  const [coffees, setCoffees] = useState<Coffee[]>([
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
    {
      id: uuidv4(),
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      categories: ['tradicional'],
      image: 'coffees/expresso-cremoso.svg',
    },
    {
      id: uuidv4(),
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      categories: ['tradicional', 'gelado'],
      image: 'coffees/café-gelado.svg',
    },
    {
      id: uuidv4(),
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      categories: ['tradicional', 'com leite'],
      image: 'coffees/café-com-leite.svg',
    },
    {
      id: uuidv4(),
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      categories: ['tradicional', 'com leite'],
      image: 'coffees/latte.svg',
    },
    {
      id: uuidv4(),
      title: 'Cappuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      categories: ['tradicional', 'com leite'],
      image: 'coffees/cappuccino.svg',
    },
    {
      id: uuidv4(),
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      categories: ['tradicional', 'com leite'],
      image: 'coffees/macchiato.svg',
    },
    {
      id: uuidv4(),
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      categories: ['tradicional', 'com leite'],
      image: 'coffees/mocaccino.svg',
    },
    {
      id: uuidv4(),
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      categories: ['especial', 'com leite'],
      image: 'coffees/chocolate-quente.svg',
    },
    {
      id: uuidv4(),
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      categories: ['especial', 'alcoólico', 'gelado'],
      image: 'coffees/cubano.svg',
    },
    {
      id: uuidv4(),
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      categories: ['especial'],
      image: 'coffees/havaiano.svg',
    },
    {
      id: uuidv4(),
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      categories: ['especial'],
      image: 'coffees/árabe.svg',
    },
    {
      id: uuidv4(),
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      categories: ['especial', 'alcoólico'],
      image: 'coffees/irlandês.svg',
    },
  ])

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeesContainer>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
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
