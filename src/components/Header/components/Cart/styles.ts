import styled from 'styled-components'

export const CartContainer = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  height: 2.2rem;
  border-radius: 6px;
  position: relative;

  ::after {
    content: '3';

    position: absolute;
    top: -0.625rem;
    right: -0.625rem;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 100%;
    width: 1.25rem;
    height: 1.25rem;
    font-size: 0.75rem;
    line-height: 1.3rem;
    text-align: center;
    font-weight: bold;
  }

  > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
