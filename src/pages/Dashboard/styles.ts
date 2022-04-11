import styled from 'styled-components';

import { theme } from '../../global/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${theme.colors.white};
`;

export const DashboardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
