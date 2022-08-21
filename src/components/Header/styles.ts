import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 88rem) {
    padding: 2rem 1rem;
  }

  > nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
      text-decoration: none;
    }
  }
`
