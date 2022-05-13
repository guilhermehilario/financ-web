import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SideMenu } from '../components/SideMenu';
import { Dashboard } from '../pages/Dashboard';

export const AppRoutes: React.FC = () => (
  <>
    {/* <SideMenu /> */}

    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </>
);
