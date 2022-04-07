import styled from 'styled-components';

import { theme } from '../../../global/theme';

interface GraphicBarProps {
  width: number;
}

export const Container = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GraphicBar = styled.div`
  width: 100%;
  margin: 10px 0;
  height: 5px;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  overflow: hidden;
`;

export const IncomeBar = styled.div<GraphicBarProps>`
  width: ${({ width }) => width}%;
  height: 5px;
  background-color: ${theme.colors.success};
`;

export const OutcomeBar = styled.div<GraphicBarProps>`
  width: ${({ width }) => width}%;
  height: 5px;
  background-color: ${theme.colors.danger};
`;
