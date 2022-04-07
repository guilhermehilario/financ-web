import styled from 'styled-components';

import { theme } from '../../global/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${theme.colors.success_light};
`;
