import React from 'react';

import { Container } from './styles';

export const SideMenu: React.FC = () => (
  <Container>
    <img src="https://avatars.githubusercontent.com/u/54961000?v=4" alt="" />
    <p>William de Souza</p>

    <ul>
      <li>Dashboard</li>
      <li>Wallets</li>
      <li>Calendar</li>
      <li>Analytics</li>
      <li>Learn</li>
      <li>Settings</li>
    </ul>

    <button type="submit">Logout</button>
  </Container>
);
