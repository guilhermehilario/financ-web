import { Link as Linking } from 'react-router-dom';

import { Avatar as MuiAvatar } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 3.75rem 3.75rem 0;
  background-color: ${({ theme }) => theme.colors.shape};
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.sizes.xsmall}px) {
    position: absolute;
    right: 10000px;

    height: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.small}px) {
    position: absolute;
    height: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.medium}px) {
    position: relative;
    right: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.normal}px) {
    position: relative;
    right: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.big}px) {
    position: relative;
    right: 0;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const Avatar = styled(MuiAvatar)`
  margin-bottom: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.sizes.xsmall}px) {
    && {
      width: 4rem;
      height: 4rem;
      border-radius: 20%;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.small}px) {
    && {
      width: 4rem;
      height: 4rem;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.medium}px) {
    && {
      width: 5rem;
      height: 5rem;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.normal}px) {
    && {
      width: 6rem;
      height: 6rem;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.big}px) {
    && {
      width: 7rem;
      height: 7rem;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0.5rem;
`;

export const Main = styled.main`
  padding: 1rem;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemList = styled.li`
  list-style: none;
`;

export const Link = styled(Linking)`
  color: inherit;
  text-decoration: none;
`;

export const ButtonLogoutGroup = styled.div`
  padding: 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
