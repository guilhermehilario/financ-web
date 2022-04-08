import { HTMLAttributes } from 'react';

export interface TextButtonProps extends HTMLAttributes<HTMLParagraphElement> {
  type?: 'submit' | 'button';
  name?: string;
  value?: string;
}
