import { CurrencyTypes } from '../../../global/types/CurrencyTypes';

export interface TransactionCardProps {
  id: string;
  incon?: string;
  title: string;
  description: string;
  value: number;
  currency?: CurrencyTypes;
  type?: 'income' | 'outcome';
}
