import styled from 'styled-components'
import { ITEM_BG_COLORS } from '.'

export const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  div:last-child {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1rem;
    }
  }
`

interface IconContainerProps {
  bgColor: keyof typeof ITEM_BG_COLORS
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme[ITEM_BG_COLORS[props.bgColor]]};
  padding: 0.5rem;
  border-radius: 100%;
  color: ${(props) => props.theme.white};
`
