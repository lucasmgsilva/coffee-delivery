import styled from 'styled-components'

export const CategoryTagContainer = styled.div`
  text-transform: uppercase;
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.625rem;
  font-weight: bold;
`
