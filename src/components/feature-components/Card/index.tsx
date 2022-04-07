import React from 'react';

import { formatCurrency } from '../../../functions/formatCurrency';
import { Text } from '../../Text';
import { Graphic } from '../Graphic';
import { Container, GraphicWrapper } from './styles';
import { CardProps } from './types';

export const Card = ({
  title,
  value,
  currency = 'BRL',
  income,
  outcome,
}: CardProps) => (
  <Container>
    <Text fontSize="normal">{title}</Text>
    <GraphicWrapper>
      <Graphic income={income} outcome={outcome} currency={currency} />
    </GraphicWrapper>

    <Text fontSize="normal">{formatCurrency(value, currency)}</Text>
  </Container>
);
