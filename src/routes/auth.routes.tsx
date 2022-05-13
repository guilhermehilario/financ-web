import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SignIn } from '../pages/Auth/Signin';

export const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/signin" element={<SignIn />} />
  </Routes>
);
