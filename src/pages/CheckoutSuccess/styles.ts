import styled from 'styled-components'

export const CheckoutSuccessContainer = styled.div`
  padding: 2.5rem 10rem 0;

  @media (max-width: 88rem) {
    padding: 2.5rem 1rem;
  }

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    > strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      font-weight: bolder;
      color: ${(props) => props.theme['yellow-dark']};
    }

    > span {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
export const SuccessInfoContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 30rem) 1fr;
  column-gap: 5rem;

  margin-top: 2.5rem;

  @media (max-width: 88rem) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 2rem;

    > img {
      width: 100%;
    }
  }

  > div {
    padding: 2.5rem;
    position: relative;
    z-index: 0;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 6px 36px;
      padding: 1px;
      background: linear-gradient(to right, #dbac2c, #8047f8);
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      z-index: -1;
    }
  }

  > img {
    max-width: 25rem;
    align-self: center;
  }
`
