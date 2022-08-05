import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

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
