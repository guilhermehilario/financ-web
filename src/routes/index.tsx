import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SideMenu } from '../components/SideMenu';
import { Dashboard } from '../pages/Dashboard';
import { Container } from './styles';

export const Root: React.FC = () => (
  <Container>
    <SideMenu />
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Container>
);
