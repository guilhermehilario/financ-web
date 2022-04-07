import React from 'react';

// import { Text } from '../../Text';
import { Graphic } from '../Graphic';
import { Container, Title, GraphicWrapper } from './styles';
import { CardProps } from './types';

export const Card = ({
  title,
  currency = 'BRL',
  income,
  outcome,
}: CardProps) => (
  <Container>
    <Title fontSize="big">{title}</Title>
    <GraphicWrapper>
      <Graphic income={income} outcome={outcome} currency={currency} />
    </GraphicWrapper>
  </Container>
);
