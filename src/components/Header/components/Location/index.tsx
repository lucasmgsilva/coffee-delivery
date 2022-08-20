import { MapPin } from 'phosphor-react'
import { LocationContainer } from './styles'

interface LocationProps {
  city: string
  state: string
}

export function Location({ city, state }: LocationProps) {
  return (
    <LocationContainer>
      <MapPin size={22} />
      <span>
        {city}, {state}
      </span>
    </LocationContainer>
  )
}
