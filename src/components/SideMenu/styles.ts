import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 0 20px 20px 0px;
  width: 25vw;
  height: 100vh;
`;

export const Avatar = styled.img`
  border-radius: 20%;
  margin: 15px 0 10px 5px;
  width: 20%;
  border: 2px solid ${({ theme }) => theme.colors.shape_dark};
`;

export const NavList = styled.ul`
  font-size: 20px;
  list-style: none;
  padding: 10px;
  width: 100%;
  height: 50%;
`;

export const ItemList = styled.li`
  margin: 10px 0 10px 5px;
  padding: 10px 0;
  width: 80%;
`;
