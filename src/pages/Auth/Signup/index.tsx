import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hook/useAuth';
import { Container } from '../styles';

export const Signup = () => {
  const { userCredentials, signUp } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleSignUp = async ({ email, password }: any) => {
    await signUp({ email, password });

    if (userCredentials) {
      navigate('/dashboard');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <input type="text" placeholder="email" {...register('email')} />
        <input type="text" placeholder="senha" {...register('password')} />

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};
