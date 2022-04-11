import React from 'react';

import { Icon } from '../Icon';
import { Text } from '../Text';
import {
  Container,
  Avatar,
  NavList,
  ItemList,
  Link,
  ButtonLogoutGroup,
  Content,
} from './styles';

export const SideMenu: React.FC = () => (
  <Container>
    <Content>
      <Avatar
        src="https://avatars.githubusercontent.com/u/54961000?v=4"
        alt=""
      />
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
    </Content>
    <Link to="/">
      <ButtonLogoutGroup>
        <Text
          fontSize="medium"
          color="secondary"
          bold
          letterSpacing="small"
          textCase="uppercase"
        >
          Logout
        </Text>
        <Icon name="IoIosArrowRoundForward" color="secondary" size="small" />
      </ButtonLogoutGroup>
    </Link>
  </Container>
);
