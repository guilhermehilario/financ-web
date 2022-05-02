import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);
