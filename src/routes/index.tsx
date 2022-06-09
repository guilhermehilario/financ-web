import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hook/useAuth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { Container } from './styles';

export const Root: React.FC = () => {
  const [auth, setAuth] = useState(false);
  // const { isAuthenticated } = useAuth();
  // const navigate = useNavigate();

  // const loadAuth = useCallback(async () => {
  //   setAuth(isAuthenticated);
  // }, [isAuthenticated, setAuth]);

  // useEffect(() => {
  //   loadAuth();

  //   auth ? navigate('/dashboard') : navigate('/signin');
  // }, [loadAuth]);

  const Layout = auth ? AppRoutes : AuthRoutes;

  return (
    <Container>
      <Layout />
    </Container>
  );
};
