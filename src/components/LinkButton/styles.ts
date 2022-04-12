import { Link as Linking } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Link = styled(Linking)`
  padding: 16px 8px;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
`;
