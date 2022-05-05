import React, { useEffect, useState } from 'react';

// import { SideMenu } from '../components/SideMenu';
import { useAuth } from '../context/Auth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { Container } from './styles';

export const Root: React.FC = () => {
  const [auth, setAuth] = useState(false);

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    (async () => setAuth(await isAuthenticated()))();
  });

  return (
    <Container>
      {/* <SideMenu /> */}
      {console.log(auth)}
      {auth ? <AppRoutes /> : <AuthRoutes />}
    </Container>
  );
};
