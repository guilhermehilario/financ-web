import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../../hooks/useAuth';
import { signInFormSchema } from '../../validations/signInFormSchema';
import { Button, Container, Content, Form, Input } from './style';

type SignInFormData = {
  email: string;
  password: string;
};

export const Login = () => {
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
    <Container>
      <Head>
        <title>Financ Web</title>
      </Head>

      <Content>
        <h1>Log In</h1>

        <Form onSubmit={handleSubmit(handleSignIn)}>
          <Input>
            <input
              type="email"
              placeholder="Enter Email Address"
              {...register('email')}
            />
          </Input>

          <Input>
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            <span>O</span>
          </Input>

          <a href="">Forgot Password?</a>

          <Button type="submit">Log In</Button>
        </Form>
      </Content>
    </Container>
  );
};
