import React from 'react';

// import { Avatar } from './avartar';
import { Text } from '../Text';
import * as styles from './styles';

export const SideMenu: React.FC = () => (
  <styles.Container>
    <styles.Avatar
      src="https://avatars.githubusercontent.com/u/54961000?v=4"
      alt=""
    />

    <Text fontSize="normal" color="secondary" bold>
      William de Souza
    </Text>

    <styles.NavList>
      <styles.ItemList>
        <Text fontSize="medium" color="text" bold>
          <styles.Link to="/">Dashboard</styles.Link>
        </Text>
      </styles.ItemList>

      <styles.ItemList>
        <Text fontSize="medium" color="text" bold>
          <styles.Link to="/">Wallets</styles.Link>
        </Text>
      </styles.ItemList>

      <styles.ItemList>
        <Text fontSize="medium" color="text" bold>
          <styles.Link to="/">Calendar</styles.Link>
        </Text>
      </styles.ItemList>

      <styles.ItemList>
        <Text fontSize="medium" color="text" bold>
          <styles.Link to="/">Analytics</styles.Link>
        </Text>
      </styles.ItemList>

      <styles.ItemList>
        <Text fontSize="medium" color="text" bold>
          <styles.Link to="/">Learn</styles.Link>
        </Text>
      </styles.ItemList>

      <styles.ItemList>
        <Text fontSize="medium" color="text" bold>
          <styles.Link to="/">Settings</styles.Link>
        </Text>
      </styles.ItemList>
    </styles.NavList>

    <button type="submit">Logout</button>
  </styles.Container>
);
