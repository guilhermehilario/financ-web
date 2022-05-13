import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hook/useAuth';
import { Container } from '../styles';

export const SignIn = () => {
  const { userCredentials, signIn } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleSignIn = async ({ email, password }: any) => {
    await signIn({ email, password });

    if (userCredentials) {
      navigate('/dashboard');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <h1>{userCredentials?.displayName}</h1>

        <input type="text" placeholder="email" {...register('email')} />
        <input type="text" placeholder="senha" {...register('password')} />

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};
