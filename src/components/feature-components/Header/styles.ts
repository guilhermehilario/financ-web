import styled from 'styled-components';

import { theme } from '../../../global/theme';

interface TitleProps {
  fontSize: keyof typeof theme.fontSize;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  border-radius: 0 0 20px 20px;
  background-color: ${theme.colors.secondary};
`;

export const Title = styled.h1<TitleProps>`
  color: ${theme.colors.white};
  font-size: ${({ fontSize }) => theme.fontSize[fontSize]}px;
  margin: 1rem;
`;

export const Header = styled.header`
  display: flex;
  padding: 1rem 0 2rem;
`;

export const Section = styled.section`
  display: flex;
`;
