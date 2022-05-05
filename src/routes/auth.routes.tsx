import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Signin } from '../pages/Auth/Signin';

export const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/signin" element={<Signin />} />
  </Routes>
);
