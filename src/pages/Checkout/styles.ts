import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 2.5rem 10rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;

    > strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-family: 'Baloo 2', sans-serif;
      font-weight: bolder;
      font-size: 1.125rem;
    }
  }
`
export const CardContainer = styled.div`
  border-radius: 0.375rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const DeliveryForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.75rem;
  }
`

interface DeliveryInputProps {
  width?: string
  flex?: number
}

export const DeliveryInput = styled.input<DeliveryInputProps>`
  border-radius: 4px;
  padding: 0.75rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};

  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  ${(props) => {
    if (props.width) {
      return css`
        width: ${props.width};
      `
    } else {
      return css`
        flex: 1;
      `
    }
  }}
`
export const PaymentContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentMethod = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  border-radius: 6px;
  padding: 1rem;
  gap: 0.75rem;
  background: ${(props) => props.theme['base-button']};

  > svg {
    color: ${(props) => props.theme.purple};
  }

  > span {
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`
