import React from 'react';

import { Icon } from '../Icon';
import { LinkButton } from '../LinkButton';
import { Text } from '../Text';
import { SideMenuMapper } from './mapper';
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
        {Object.keys(SideMenuMapper).map(menu => (
          <ItemList key={menu}>
            <LinkButton to={SideMenuMapper[menu]} label={menu} />
          </ItemList>
        ))}
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
