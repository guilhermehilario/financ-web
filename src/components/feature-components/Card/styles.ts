import styled from 'styled-components';

import { theme } from '../../../global/theme';

interface TitleProps {
  fontSize: keyof typeof theme.fontSize;
}

export const Container = styled.div`
  background-color: ${theme.colors.secondary};
  width: 100%;
  height: 40vh;
  border-radius: 0 0 20px 20px;
  padding: 20px;
`;

export const Title = styled.h1<TitleProps>`
  color: ${theme.colors.white};
  font-size: ${({ fontSize }) => theme.fontSize[fontSize]}px;
  margin: 10px 15px;
`;

export const GraphicWrapper = styled.div`
  margin: 15px 0px 45px 0px;
`;
