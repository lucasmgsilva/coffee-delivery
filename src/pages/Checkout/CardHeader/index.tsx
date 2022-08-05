import React, { ReactElement } from 'react'
import { CardHeaderContainer } from './styles'

export const CARD_ICON_COLORS = {
  yellowDark: 'yellow-dark',
  purple: 'purple',
} as const

interface CardHeaderProps {
  title: string
  subtitle: string
  icon: ReactElement
  iconColor: keyof typeof CARD_ICON_COLORS
}

export function CardHeader({
  title,
  subtitle,
  icon,
  iconColor,
}: CardHeaderProps) {
  return (
    <CardHeaderContainer iconColor={iconColor}>
      {React.cloneElement(icon, { size: '22' })}
      <div>
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </div>
    </CardHeaderContainer>
  )
}
