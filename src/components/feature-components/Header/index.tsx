import React from 'react';

import { Card } from '../Card';
import { Container, Title, Header, Section } from './styles';
import { HeaderProps } from './types';

export const HeaderWrapper = ({ title, cWallets }: HeaderProps) => {
  console.log(cWallets);

  return (
    <Container>
      <Header>
        <Title fontSize="normal" color="white">
          {title}
        </Title>
      </Header>
      <Section>
        <Card
          title="Banco1"
          currency="BRL"
          income={1000}
          outcome={600}
          value={400}
        />
        <Card
          title="Banco1"
          currency="BRL"
          income={1000}
          outcome={600}
          value={400}
        />
        <Card
          title="Banco1"
          currency="BRL"
          income={1000}
          outcome={600}
          value={400}
        />
      </Section>
    </Container>
  );
};
