import { useForm } from 'react-hook-form';

import { useAuth } from '../../hooks/useAuth';
import { withSSRAuth } from '../../utils/withSSRAuth';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const { handleSubmit } = useForm();

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <>
      <h1>{user?.displayName}</h1>
      <form onSubmit={handleSubmit(handleSignOut)}>
        <button type="submit">Sair</button>
      </form>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {},
  };
});
