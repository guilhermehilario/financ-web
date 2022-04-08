import { Link as Linking } from 'react-router-dom';

import { lighten } from 'polished';
import styled from 'styled-components';

import { icons } from '../../global/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 0 60px 60px 0;
  width: 25vw;
  height: 100vh;
  padding: 32px;
`;

export const Avatar = styled.img`
  border-radius: 20%;
  margin: 32px 0 16px;
  width: 25%;
  border: 2px solid ${({ theme }) => theme.colors.shape_dark};
`;

export const NavList = styled.ul`
  margin-top: 32px;
  list-style: none;
  width: 100%;
  height: 50%;
`;

export const ItemList = styled.li`
  padding: 16px 0;
  width: 100%;
  border-bottom: 2px solid
    ${({ theme }) => lighten(0.3, theme.colors.text_light)};
`;

export const Link = styled(Linking)`
  color: inherit;
  text-decoration: none;
`;

export const ButtonLogoutGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Icon = styled(icons.arrow_logout)`
  color: ${({ theme }) => theme.colors.success};
`;
