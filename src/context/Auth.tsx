import React, { createContext, useContext } from 'react';

import '../google-services';

import {
  useFirebaseOnAuthentication,
  useFirebaseSignIn,
  useFirebaseSignOut,
  useFirebaseSignUp,
} from '../hook/useFirebase';
import { AuthProviderProps, SignInProps, SignUpProps } from '../routes/types';

const AuthContext = createContext<AuthProviderProps>({} as AuthProviderProps);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const isAuthenticated = useFirebaseOnAuthentication();

  const signIn = async ({ email, password }: SignInProps): Promise<any> => {
    try {
      const { user } = await useFirebaseSignIn({ email, password });

      localStorage.setItem('@FNWeb:user', JSON.stringify(user));

      return user;
    } catch (error) {
      return error;
    }
  };

  const signUp = async ({ email, password }: SignUpProps): Promise<any> => {
    try {
      const { user } = await useFirebaseSignUp({ email, password });

      Promise.all([localStorage.setItem('@FNWeb:user', JSON.stringify(user))]);

      return user;
    } catch (error) {
      return error;
    }
  };

  const signOut = () => useFirebaseSignOut();

  const value = { isAuthenticated, signIn, signUp, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
