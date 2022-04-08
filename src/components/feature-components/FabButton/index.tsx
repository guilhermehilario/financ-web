import React from 'react';

import { iconsLib } from '../../../global/icons';
import { Container, NavListItemText, NavListItemLink, Button } from './styles';

// import { FabButtonProps } from './types';

export const FabButton = () => {
  const teste = <iconsLib.addPlus size={40} />;

  const names = ['Transaction', 'Wallets'];

  return (
    <Container>
      <Button type="button">{teste}</Button>
      <ul>
        <li>
          <NavListItemLink to="/" title={names[0]}>
            <iconsLib.cash />
            <NavListItemText>{names[0]}</NavListItemText>
          </NavListItemLink>
          <NavListItemLink to="/" title={names[1]}>
            <iconsLib.wallet />
            <NavListItemText>{names[1]}</NavListItemText>
          </NavListItemLink>
        </li>
      </ul>
    </Container>
  );
};
