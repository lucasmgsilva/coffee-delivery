import styled from 'styled-components'

export const IntroductionContainer = styled.div`
  padding: 5.75rem 10rem;

  display: flex;
  gap: 1.5rem;

  background: url('background-introduction.svg') no-repeat center center;

  > div {
    > div:first-child {
      margin-bottom: 4.125rem;

      > h1 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 2.95rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-title']};
        margin-bottom: 1rem;
      }

      > span {
        font-size: 1.25rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }
`

export const ItensContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, auto));
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`
