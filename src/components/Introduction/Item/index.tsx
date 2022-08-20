import { ReactNode } from 'react'
import { IconContainer, ItemContainer } from './styles'

export const ITEM_BG_COLORS = {
  yellowDark: 'yellow-dark',
  brown: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface ItemText {
  type: 'normal' | 'strong'
  text: string
}

interface ItemProps {
  children: ReactNode
  title: ItemText[]
  subtitle?: ItemText[]
  bgColor: keyof typeof ITEM_BG_COLORS
}

export function Item({ children, title, subtitle, bgColor }: ItemProps) {
  return (
    <ItemContainer>
      <IconContainer bgColor={bgColor}>{children}</IconContainer>
      <div>
        <span>
          {title?.map((t) =>
            t.type === 'normal' ? (
              t.text
            ) : (
              <strong key={t.text}>{t.text}</strong>
            ),
          )}
        </span>

        {subtitle && (
          <span>
            {subtitle?.map((t) =>
              t.type === 'normal' ? (
                t.text
              ) : (
                <strong key={t.text}>{t.text}</strong>
              ),
            )}
          </span>
        )}
      </div>
    </ItemContainer>
  )
}
