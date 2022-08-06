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
interface CardContainerProps {
  hasRoundedEdge?: boolean
}

export const CardContainer = styled.div<CardContainerProps>`
  ${(props) =>
    props.hasRoundedEdge
      ? css`
          border-radius: 6px 44px;
        `
      : css`
          border-radius: 0.375rem;
        `}
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  isOptional?: boolean
}

export const DeliveryInput = styled.input<DeliveryInputProps>`
  border-radius: 4px;
  padding: 0.75rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};

  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  position: relative;

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

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`
interface PaymentMethodProps {
  isSelected?: boolean
}

export const PaymentMethod = styled.div<PaymentMethodProps>`
  display: flex;
  flex: 1;
  align-items: center;

  border-radius: 6px;
  padding: 1rem;
  gap: 0.75rem;
  background: ${(props) => {
    if (props.isSelected) {
      return props.theme['purple-light']
    } else {
      return props.theme['base-button']
    }
  }};

  ${(props) => {
    if (props.isSelected) {
      return css`
        border: 1px solid ${props.theme.purple};
      `
    }
  }}

  > svg {
    color: ${(props) => props.theme.purple};
  }

  > span {
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }
`

export const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.75rem;

  span {
    font-size: 0.875rem;
  }

  strong {
    font-size: 1.25rem;
  }

  span:nth-child(2n),
  strong:nth-child(2n) {
    text-align: right;
  }
`
export const ConfirmButton = styled.button`
  border-radius: 6px;
  gap: 0.25rem;
  padding: 0.75rem 0.5rem;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: bold;
  border: 0;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
