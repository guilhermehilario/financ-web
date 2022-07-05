import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../../hooks/useAuth';
import { withSSRGuest } from '../../utils/withSSRGuest';
import { registerFormSchema } from '../../validations/signupFormSchema';

type RegisterFormData = {
  email: string;
  password: string;
};

export default function Register() {
  const { signUp } = useAuth();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  const handleRegister: SubmitHandler<RegisterFormData> = async ({
    email,
    password,
  }: any) => {
    await signUp({ email, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <input type="text" placeholder="email" {...register('email')} />
        <input type="password" placeholder="senha" {...register('password')} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export const getServerSideProps = withSSRGuest(async ctx => {
  return {
    props: {},
  };
});
