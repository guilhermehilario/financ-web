import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { theme } from '../../global/theme';

export const Container = styled(Link)`
  font-size: 20px;
  color: ${theme.colors.shape_dark};
  padding: 5px;
  border-radius: 5px;
  background-color: ${'transparent'};
  text-decoration: none;
`;
