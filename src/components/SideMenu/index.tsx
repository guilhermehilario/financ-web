import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Divider, Stack } from '@mui/material';

import { useAuth } from '../../hook/useAuth';
import { Icon } from '../Icon';
import { LinkButton } from '../LinkButton';
import { Text } from '../Text';
import { SideMenuMapper } from './mapper';
import {
  Avatar,
  ButtonLogoutGroup,
  Container,
  Footer,
  Header,
  ItemList,
  Link,
  Main,
  Section,
} from './styles';

export const SideMenu = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();

    navigate('/signin');
  };

  return (
    <Container>
      <Header>
        <Avatar
          alt="Will"
          src="https://avatars.githubusercontent.com/u/54961000?v=4"
        />

        <Text fontSize="normal" color="secondary" bold>
          William de Souza
        </Text>
      </Header>

      <Section>
        <Main>
          <Stack
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}
          >
            {Object.keys(SideMenuMapper).map(menu => (
              <ItemList key={menu}>
                <LinkButton to={SideMenuMapper[menu]} label={menu} />
              </ItemList>
            ))}
          </Stack>
        </Main>

        <Footer>
          <Link onClick={() => handleSignOut}>
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
              <Icon
                name="IoIosArrowRoundForward"
                color="secondary"
                size="default"
              />
            </ButtonLogoutGroup>
          </Link>
        </Footer>
      </Section>
    </Container>
  );
};
