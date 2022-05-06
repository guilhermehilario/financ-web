import React, { createContext, useContext } from 'react';

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut as signOutUser,
} from 'firebase/auth';

import '../google-services';
import useFirebaseAuthentication from '../hook/useFirebaseAuthentication';
import { AuthProviderProps, SignInProps, SignUpProps } from '../routes/types';

const AuthContext = createContext<AuthProviderProps>({} as AuthProviderProps);

const auth = getAuth();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const isAuthenticated = useFirebaseAuthentication();

  const signIn = async ({ email, password }: SignInProps): Promise<any> => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      localStorage.setItem('@FNWeb:user', JSON.stringify(user));

      return user;
    } catch (error) {
      return error;
    }
  };

  const signUp = async ({ email, password }: SignUpProps): Promise<any> => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      Promise.all([localStorage.setItem('@FNWeb:user', JSON.stringify(user))]);

      return user;
    } catch (error) {
      return error;
    }
  };

  const signOut = () => signOutUser(auth);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
