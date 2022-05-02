import React from 'react';

import { SideMenu } from '../components/SideMenu';
// import { useAuth } from '../context/Auth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { Container } from './styles';

export const Root: React.FC = () => {
  const auth = true;

  return (
    <Container>
      <SideMenu />
      {auth ? <AppRoutes /> : <AuthRoutes />}
    </Container>
  );
};
