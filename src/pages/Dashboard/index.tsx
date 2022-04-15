import React from 'react';

import { FabButton } from '../../components/feature-components/FabButton';
import { Header } from '../../components/feature-components/Header';
import { TransactionCard } from '../../components/feature-components/TransactionCard';
import { SideMenu } from '../../components/SideMenu';
import { Container, DashboardContainer } from './styles';

export const Dashboard: React.FC = () => (
  <Container>
    <SideMenu />
    <DashboardContainer>
      <Header title="Dashboard" />
      <TransactionCard id="123" title="teste" description="teste" value={100} />
      <TransactionCard
        id="124"
        title="teste"
        description="teste"
        value={100}
        type="outcome"
      />
    </DashboardContainer>
    <FabButton />
  </Container>
);
