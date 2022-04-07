import React from 'react';

import { Header } from '../../components/feature-components/Header';
import { SideMenu } from '../../components/SideMenu';
import { Container } from './styles';

export const Dashboard: React.FC = () => (
  <Container>
    <SideMenu />
    <Header title="Dashboard" />
  </Container>
);
