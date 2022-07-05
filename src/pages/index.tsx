import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../hooks/useAuth';
import { withSSRGuest } from '../utils/withSSRGuest';
import { signInFormSchema } from '../validations/signInFormSchema';

import '../services/firebase';

type SignInFormData = {
  email: string;
  password: string;
};

export default function Home() {
  const { signIn } = useAuth();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async ({
    email,
    password,
  }: any) => {
    await signIn({ email, password });
  };

  return (
    <>
      <Head>
        <title>Financ Web</title>
      </Head>

      <div>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <input type="text" placeholder="email" {...register('email')} />
          <input
            type="password"
            placeholder="senha"
            {...register('password')}
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export const getServerSideProps = withSSRGuest(async ctx => {
  return {
    props: {},
  };
});
