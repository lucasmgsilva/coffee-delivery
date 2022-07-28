import { ReactNode } from 'react'
import { IconContainer, ItemContainer } from './styles'

export const ITEM_BG_COLORS = {
  yellowDark: 'yellow-dark',
  brown: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface ItemProps {
  children: ReactNode
  description: string
  bgColor: keyof typeof ITEM_BG_COLORS
}

export function Item({ children, description, bgColor }: ItemProps) {
  return (
    <ItemContainer>
      <IconContainer bgColor={bgColor}>{children}</IconContainer>
      <span>{description}</span>
    </ItemContainer>
  )
}
