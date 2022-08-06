import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  text-align: center;
  padding: 1.25rem;
  padding-top: 0rem;
  height: 18.125rem;

  > strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -20px;
`

export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;

  > div:first-child {
    display: flex;
    align-items: center;

    > span {
      font-size: 0.875rem;
    }

    > strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
    }
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  width: 4.5rem;

  > span {
    font-size: 1rem;
  }
`
export const ActionButton = styled.button`
  border: none;
  background: transparent;
  color: ${(props) => props.theme.purple};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const CartButton = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  border: 0;
  padding: 0.5rem;
  width: 2.375rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
