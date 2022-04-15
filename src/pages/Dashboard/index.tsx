import React from 'react';

import { FabButton } from '../../components/feature-components/FabButton';
import { HeaderWrapper as Header } from '../../components/feature-components/Header';
import { MainWrapper as Main } from '../../components/feature-components/Main';
import { Container } from './styles';

export const Dashboard: React.FC = () => (
  <Container>
    <Header title="Dashboard" />
    <Main />
    <FabButton />
  </Container>
);
