import React from 'react';

// import { Avatar } from './avartar';
import * as styles from './styles';

export const SideMenu: React.FC = () => (
  <styles.Container>
    <styles.Avatar
      src="https://avatars.githubusercontent.com/u/54961000?v=4"
      alt=""
    />
    <p>William de Souza</p>

    <styles.NavList>
      <styles.ItemList>Dashboard</styles.ItemList>
      <styles.ItemList>Wallets</styles.ItemList>
      <styles.ItemList>Calendar</styles.ItemList>
      <styles.ItemList>Analytics</styles.ItemList>
      <styles.ItemList>Learn</styles.ItemList>
      <styles.ItemList>Settings</styles.ItemList>
    </styles.NavList>

    <button type="submit">Logout</button>
  </styles.Container>
);
