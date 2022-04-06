import { HTMLAttributes } from 'react';

import { theme } from '../../global/theme';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  color?: keyof typeof theme.colors;
  fontSize?: keyof typeof theme.fontSize;
  textCase?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  bold?: boolean;
  letterSpacing?: keyof typeof theme.letterSpacing;
}
