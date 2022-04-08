import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;

  button:focus {
    outline: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0;
    padding-right: 5px;
    margin: 0;
    list-style: none;
    z-index: 10;

    -webkit-transition: 0.2s ease-out;
    -moz-transition: 0.2s ease-out;
    transition: 0.2s ease-out;
  }

  ul li {
    display: flex;
    justify-content: center;
    flex-direction: column;

    position: relative;
    margin-bottom: -10%;
    opacity: 0;

    -webkit-transition: 0.3s ease-out;
    -moz-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
  }

  Button:active,
  Button:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.secondary_light};
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
  }

  Button:active + ul,
  Button:focus + ul {
    bottom: 70px;
  }

  Button:active + ul li,
  Button:focus + ul li {
    margin-bottom: 30px;
    opacity: 1;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #5b19b7;
  right: 0;
  bottom: 0;
  z-index: 20;

  cursor: pointer;
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
  font-size: 24px;
  color: white;

  -webkit-transition: 0.2s ease-out;
  -moz-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
`;

export const NavListItemLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
  width: 160px;
  height: 40px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.colors.shape_dark};
  border: none;
  border-radius: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
  padding: 15px;
  font-size: 24px;
  color: white;
  text-decoration: none;

  -webkit-transition: 0.2s ease-out;
  -moz-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
`;

export const NavListItemText = styled.label`
  font-size: 16px;
  margin: 10px;
  pointer-events: none;
`;
