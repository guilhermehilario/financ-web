import React from 'react';

import { Card } from '../Card';
import { Container, Title } from './styles';
import { HeaderProps } from './types';

export const Header = ({ title }: HeaderProps) => (
  <Container>
    <Title fontSize="big" color="white">
      {title}
    </Title>
    <Card
      title="Banco1"
      currency="BRL"
      income={1000}
      outcome={400}
      value={100}
    />
  </Container>
);
