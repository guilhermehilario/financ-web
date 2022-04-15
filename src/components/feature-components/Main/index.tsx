import React from 'react';

// import { Icon } from '../../Icon';
import { TransactionCard } from '../TransactionCard';
import { Container } from './styles';

export const MainWrapper = () => (
  <Container>
    <TransactionCard id="123" title="teste" description="teste" value={100} />
    <TransactionCard id="123" title="teste" description="teste" value={100} />
    <TransactionCard id="123" title="teste" description="teste" value={100} />

    <TransactionCard
      id="124"
      title="teste"
      description="teste"
      value={100}
      type="outcome"
    />
    {/* <Icon name="IoIosArrowDropleft" size="small" color="danger" />
    <Icon name="IoIosArrowDropright" size="default" color="success" />
    <Icon name="IoIosArrowDropleftCircle" /> */}
  </Container>
);
