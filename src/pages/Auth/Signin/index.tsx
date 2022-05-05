import React from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../../context/Auth';
import { Container } from '../styles';

export const Signin = () => {
  const { signIn } = useAuth();

  const { register, handleSubmit } = useForm();

  const handleSignin = ({ email, password }: any) => {
    const response = signIn({ email, password });
    return response;
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleSignin)}>
        <input type="text" placeholder="email" {...register('email')} />
        <input type="text" placeholder="senha" {...register('password')} />

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};
