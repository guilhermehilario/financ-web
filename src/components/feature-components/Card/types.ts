import { HTMLAttributes } from 'react';

import { CurrencyTypes } from '../../../global/types/CurrencyTypes';

export interface CardProps extends HTMLAttributes<HTMLParagraphElement> {
  title: string;
  currency: CurrencyTypes;
  income: number;
  outcome: number;
  value: number;
}
