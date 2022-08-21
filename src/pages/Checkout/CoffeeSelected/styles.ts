import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  gap: 0.5rem 0.25rem;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 88rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  > img {
    width: 4rem;
    height: 4rem;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;

  border-radius: 6px;
  gap: 0.25rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  border: 0;
  cursor: pointer;

  background: ${(props) => props.theme['base-button']};

  > svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
export const Divider = styled.div`
  border: 1px solid ${(props) => props.theme['base-button']};
`
