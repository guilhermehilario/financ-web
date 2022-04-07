import React from 'react';

import { Container } from './styles';
import { TextButtonProps } from './types';

export const TextButton = ({
  children,
  name,
  type = 'button',
  value = 'button',
}: TextButtonProps) => (
  <Container type={type} name={name} value={value}>
    {children}
  </Container>
);
