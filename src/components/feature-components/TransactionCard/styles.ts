import styled from 'styled-components';

import { theme as Theme } from '../../../global/theme';

const { colors } = Theme;

type TransactionTypes = {
  type: 'income' | 'outcome';
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
  margin: 16px;
  width: 90%;
`;

export const IconWrapper = styled.div<TransactionTypes>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ type }: TransactionTypes): string =>
    type === 'income' ? colors.success : colors.danger};
`;

export const InfoWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;
