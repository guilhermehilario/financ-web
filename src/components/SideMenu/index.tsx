import React from 'react';

import { icons } from '../../global/icons';
import { theme } from '../../global/theme';
import { Text } from '../Text';
import { TextButton } from '../TextButton';
import {
  Container,
  Avatar,
  NavList,
  ItemList,
  Link,
  ButtonLogoutGroup,
} from './styles';

export const SideMenu: React.FC = () => (
  <Container>
    <Avatar src="https://avatars.githubusercontent.com/u/54961000?v=4" alt="" />
    <Text fontSize="normal" color="secondary" bold>
      William de Souza
    </Text>
    <NavList>
      <ItemList>
        <Text fontSize="medium" color="text" bold>
          <Link to="/">Dashboard</Link>
        </Text>
      </ItemList>

      <ItemList>
        <Text fontSize="medium" color="text" bold>
          <Link to="/">Wallets</Link>
        </Text>
      </ItemList>

      <ItemList>
        <Text fontSize="medium" color="text" bold>
          <Link to="/">Calendar</Link>
        </Text>
      </ItemList>

      <ItemList>
        <Text fontSize="medium" color="text" bold>
          <Link to="/">Analytics</Link>
        </Text>
      </ItemList>

      <ItemList>
        <Text fontSize="medium" color="text" bold>
          <Link to="/">Learn</Link>
        </Text>
      </ItemList>

      <ItemList>
        <Text fontSize="medium" color="text" bold>
          <Link to="/">Settings</Link>
        </Text>
      </ItemList>
    </NavList>

    <ButtonLogoutGroup>
      <TextButton type="submit">Logout</TextButton>
      <icons.arrow_logout size="32" color={theme.colors.shape_dark} />
    </ButtonLogoutGroup>
  </Container>
);
