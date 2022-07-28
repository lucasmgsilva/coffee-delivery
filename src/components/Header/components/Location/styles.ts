import styled from 'styled-components'

export const LocationContainer = styled.div`
  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  > svg {
    color: ${(props) => props.theme.purple};
  }

  > span {
    font-size: 0.875rem;
    line-height: 1.3rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`
