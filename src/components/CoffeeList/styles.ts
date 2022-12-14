import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  padding: 5.75rem 10rem;

  @media (max-width: 88rem) {
    padding: 3rem 1rem;
  }

  > h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CoffeesContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  row-gap: 2.5rem;
  column-gap: 1.25rem;
`
