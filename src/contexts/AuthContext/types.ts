import { AuthProviderRequest } from './AuthProvider/types';

export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const SIGNOUT = 'SIGNOUT';

export const AUTH_TOKEN = 'firebase-auth.token';

export type UserProps = {
  uid: string;
  photoURL?: string;
  displayName?: string;
};

export type AuthContextInitialStateProps = {
  user: UserProps;
  auth: boolean;
  loading: boolean;
};

export type AuthContextProps = {
  user: UserProps;
  auth: boolean;
  loading: boolean;
  signIn(credentials: AuthProviderRequest): Promise<void>;
  signUp(credentials: AuthProviderRequest): Promise<void>;
  signOut(): Promise<void>;
};
