import React from 'react';

import { Card } from '../../components/feature-components/Card';
import { SideMenu } from '../../components/SideMenu';
import { Container } from './styles';

export const Dashboard: React.FC = () => (
  <Container>
    <SideMenu />
    <Card
      title="Dashboard"
      currency="BRL"
      income={1000}
      outcome={400}
      value={100}
    />
  </Container>
);
