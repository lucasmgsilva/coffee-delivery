import styled from 'styled-components'

export const HeaderContainer = styled.header`
  /* padding: 2rem 10rem; */

  max-width: 68rem;
  padding: 2rem 0;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  > nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
      text-decoration: none;
    }
  }
`
