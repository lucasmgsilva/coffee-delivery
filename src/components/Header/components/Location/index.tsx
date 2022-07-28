import { MapPin } from 'phosphor-react'
import { LocationContainer } from './styles'

export function Location() {
  return (
    <LocationContainer>
      <MapPin size={22} />
      <span>Porto Alegre, RS</span>
    </LocationContainer>
  )
}
