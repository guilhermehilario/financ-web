import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Test } from '../pages/Test';

export const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/test" element={<Test />} />
  </Routes>
);
