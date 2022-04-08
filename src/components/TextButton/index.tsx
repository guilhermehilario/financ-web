import React from 'react';

import { Container } from './styles';
import { TextButtonProps } from './types';

export const TextButton = ({ children }: TextButtonProps) => (
  <Container to="/">{children}</Container>
);
