import styled from 'styled-components'
import { CARD_ICON_COLORS } from '.'

interface CardHeaderContainerProps {
  iconColor: keyof typeof CARD_ICON_COLORS
}

export const CardHeaderContainer = styled.div<CardHeaderContainerProps>`
  display: flex;
  gap: 0.5rem;

  > svg {
    color: ${(props) => props.theme[CARD_ICON_COLORS[props.iconColor]]};
  }

  > strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: normal;
  }

  > span {
    font-size: 0.875rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }
`
