import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
  font-size: 24px;
  color: white;

  -webkit-transition: 0.2s ease-out;
  -moz-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
`;

export const NavList = styled.ul`
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
`;

export const NavListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin-bottom: -10%;
  opacity: 0;

  -webkit-transition: 0.3s ease-out;
  -moz-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
`;
