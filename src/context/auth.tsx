import React, { createContext, useContext, useState } from 'react';

import '../google-services';

import {
  useFirebaseOnAuthentication,
  useFirebaseSignIn,
  useFirebaseSignOut,
  useFirebaseSignUp,
} from '../hook/useFirebase';
import {
  AuthProviderProps,
  SignInProps,
  SignUpProps,
  UserCredentialsProps,
} from './types';

export const AuthContext = createContext<AuthProviderProps>(
  {} as AuthProviderProps,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState<
    UserCredentialsProps | undefined
  >();

  const isAuthenticated = useFirebaseOnAuthentication();

  const signIn = async ({ email, password }: SignInProps): Promise<any> => {
    const response = await useFirebaseSignIn({ email, password });

    if (response.user) {
      setUserCredentials({
        uid: response.user.uid,
        photoURL: response.user.photoURL,
        displayName: response.user.displayName,
      });
    }
  };

  const signUp = async ({ email, password }: SignUpProps): Promise<any> => {
    const response = await useFirebaseSignUp({ email, password });

    if (response.user) {
      setUserCredentials({
        uid: response.user.uid,
        photoURL: response.user.photoURL,
        displayName: response.user.displayName,
      });
    }
  };

  const signOut = async () => {
    await useFirebaseSignOut();

    setUserCredentials(undefined);
  };

  const value = { isAuthenticated, userCredentials, signIn, signUp, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
