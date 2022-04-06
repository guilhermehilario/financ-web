import React from 'react';

import { StyledText } from './styles';
import { TextProps } from './types';

export const Text = ({
  children,
  color = 'text',
  fontSize = 'medium',
  textCase = 'none',
  bold = false,
  letterSpacing = 'normal',
}: TextProps) => (
  <StyledText
    color={color}
    fontSize={fontSize}
    textCase={textCase}
    bold={bold}
    letterSpacing={letterSpacing}
  >
    {children}
  </StyledText>
);
