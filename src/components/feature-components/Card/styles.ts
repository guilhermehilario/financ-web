import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 20px;
  margin: 0 1rem;

  padding: 1rem;
  width: 35%;

  @media screen and (min-width: ${({ theme }) => theme.sizes.xsmall}px) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.small}px) {
    width: 100%;
  }
`;

export const GraphicWrapper = styled.div`
  margin: 1rem 0.5rem 2.5rem;
`;
