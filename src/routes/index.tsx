import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';

export const Root: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);
