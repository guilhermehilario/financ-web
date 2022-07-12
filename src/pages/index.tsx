import { withSSRGuest } from '../utils/withSSRGuest';

import '../services/firebase';
import { Login } from '../components/login';

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}

export const getServerSideProps = withSSRGuest(async ctx => {
  return {
    props: {},
  };
});
