import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
  width: 100vw;
  height: 100vh;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.sizes.xsmall}px) {
    grid-template-columns: 10fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.small}px) {
    grid-template-columns: 10fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.medium}px) {
    grid-template-columns: 3fr 7fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.normal}px) {
    grid-template-columns: 2.5fr 8fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.big}px) {
    grid-template-columns: 2fr 8fr;
  }
`;
