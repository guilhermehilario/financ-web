import { ReactNode } from 'react';

export type AuthProviderProps = {
  children: ReactNode;
};

export type AuthProviderRequest = {
  email: string;
  password: string;
};
