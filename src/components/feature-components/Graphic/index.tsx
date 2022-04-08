import React, { useEffect, useState } from 'react';

import { formatCurrency } from '../../../functions/formatCurrency';
import { Text } from '../../Text';
import { Container, Info, GraphicBar, IncomeBar, OutcomeBar } from './styles';
import { GrapichProps } from './types';

export const Graphic = ({ income, outcome, currency }: GrapichProps) => {
  const [incomePercentage, setIncomePercentage] = useState(0);
  const [outcomePercentage, setOutcomePercentage] = useState(0);

  const [incomePercentageStyle, setIncomePercentageStyle] = useState(0);
  const [outcomePercentageStyle, setOutcomePercentageStyle] = useState(0);

  useEffect(() => {
    const calculatePercentage = (): void => {
      const privateTotal = income - outcome;

      let privateIncome = ((income - outcome) * 100) / income;
      setIncomePercentage(privateIncome);
      privateIncome = privateIncome < 0 ? 0 : privateIncome;
      privateIncome = privateIncome > 100 ? 100 : privateIncome;
      setIncomePercentageStyle(privateIncome);

      let privateOutcome = ((income - privateTotal) * 100) / income;
      setOutcomePercentage(privateOutcome);
      privateOutcome = privateOutcome < 0 ? 0 : privateOutcome;
      privateOutcome = privateOutcome > 100 ? 100 : privateOutcome;
      setOutcomePercentageStyle(privateOutcome);
    };

    calculatePercentage();
  }, [income, incomePercentage, outcome, outcomePercentage]);
  return (
    // TODO: arrumar o import do style
    <Container>
      <Info>
        <Text color="success">{`${incomePercentage}%`}</Text>
        <Text color="danger">{`${outcomePercentage}%`}</Text>
      </Info>

      <GraphicBar>
        <IncomeBar width={incomePercentageStyle} />
        <OutcomeBar width={outcomePercentageStyle} />
      </GraphicBar>

      <Info>
        <Text color="success">{formatCurrency(income, currency)}</Text>
        <Text color="danger">{formatCurrency(outcome, currency)}</Text>
      </Info>
    </Container>
  );
};
