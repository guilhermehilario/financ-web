import React from 'react';

import { formatCurrency } from '../../../functions/formatCurrency';
import { icons } from '../../../global/icons';
import { Text } from '../../Text';
import { Container, IconWrapper, InfoContainer, InfoWrapper } from './styles';
import { TransactionCardProps } from './types';

// TODO: the icon is based on category
export const TransactionCard = ({
  title,
  description,
  currency = 'BRL',
  value,
  type = 'income',
}: TransactionCardProps) => (
  <Container>
    <IconWrapper type={type}>
      {type === 'income' ? <icons.dollar /> : <icons.home />}
    </IconWrapper>

    <InfoWrapper>
      <InfoContainer>
        <Text bold>{title}</Text>
        <Text fontSize="small">{formatCurrency(value, currency)}</Text>
      </InfoContainer>

      <Text fontSize="xsmall" color="text_light">
        {description}
      </Text>
    </InfoWrapper>
  </Container>
);
