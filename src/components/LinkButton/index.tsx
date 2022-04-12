import React from 'react';

import { Text } from '../Text';
import { Container, Link } from './styles';
import { LinkButtonProps } from './types';

export const LinkButton = ({ to, label }: LinkButtonProps) => (
  <Container>
    <Link to={to}>
      <Text fontSize="medium" color="text" bold>
        {label}
      </Text>
    </Link>
  </Container>
);
