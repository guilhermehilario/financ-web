import React, { useEffect } from 'react';

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { FabButton } from '../../components/feature-components/FabButton';
import { HeaderWrapper as Header } from '../../components/feature-components/Header';
import { MainWrapper as Main } from '../../components/feature-components/Main';
import { app } from '../../google-services';
import { Container } from './styles';

const db = getFirestore(app);

export const Dashboard: React.FC = () => {
  const getWallets = async () => {
    const wallets = await getDocs(collection(db, 'wallets'));
    wallets.forEach(doc => console.log(doc.data()));
    console.log(wallets);
  };

  useEffect(() => {
    getWallets();
  });

  return (
    <Container>
      <Header title="Dashboard" />
      <Main />
      <FabButton />
    </Container>
  );
};
