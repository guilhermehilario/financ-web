import React, { useEffect, useState } from 'react';

import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';

import { FabButton } from '../../components/feature-components/FabButton';
import { HeaderWrapper as Header } from '../../components/feature-components/Header';
import { MainWrapper as Main } from '../../components/feature-components/Main';
import { app } from '../../google-services';
import { Container } from './styles';

const db = getFirestore(app);

// interface WalletProps {
//   title: string;
//   outcome: number;
//   income: number;
//   balance: number;
//   user: string;
// }

export const Dashboard: React.FC = () => {
  const [walletsList, setWalletsList] = useState<any>();

  const getWallets = async () => {
    const wallets = await getDocs(collection(db, 'wallets'));
    wallets.forEach(doc => setWalletsList(doc.data()));
    console.count();
  };

  useEffect(() => {
    (async () => {
      await getWallets();
    })();
  }, [walletsList]);

  return (
    <Container>
      <Header title="Dashboard" cWallets={walletsList} />
      <Main />
      <FabButton />
    </Container>
  );
};
