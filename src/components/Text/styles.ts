import styled from 'styled-components';

import { theme } from '../../global/theme';

export interface StyledTextProps {
  color: keyof typeof theme.colors;
  fontSize: keyof typeof theme.fontSize;
  textCase: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  bold: boolean;
}
export const StyledText = styled.text<StyledTextProps>`
  font-family: ${({ bold }) => (bold ? 'Inter, sans-serif' : 'Inter')};
  color: ${({ color }) => theme.colors[color]};
  font-size: ${({ fontSize }) => theme.fontSize[fontSize]}px;
  text-transform: ${({ textCase }) => textCase};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
