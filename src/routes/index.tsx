import React, { useCallback, useEffect, useState } from 'react';

// import { SideMenu } from '../components/SideMenu';
import { useAuth } from '../context/Auth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { Container } from './styles';

export const Root: React.FC = () => {
  const [auth, setAuth] = useState();
  const { isAuthenticated } = useAuth();

  const loadAuth = useCallback(async () => {
    setAuth(isAuthenticated);
  }, [isAuthenticated, setAuth]);

  useEffect(() => {
    loadAuth();
  }, [loadAuth]);

  return (
    <Container>
      {/* <SideMenu /> */}
      {auth ? <AppRoutes /> : <AuthRoutes />}
    </Container>
  );
};
