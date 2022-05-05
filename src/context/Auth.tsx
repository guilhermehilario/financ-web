import React, { createContext, useContext, useState } from 'react';

import {
  getAuth,
  signOut as signOutUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import {
  AuthProviderProps,
  UserCredentialProps,
  SignInProps,
  SignUpProps,
} from '../routes/types';

import '../google-services';

const AuthContext = createContext<AuthProviderProps>({} as AuthProviderProps);

const auth = getAuth();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [userCredential, setUserCredential] = useState<UserCredentialProps>();

  const isAuthenticated = async () =>
    auth.onAuthStateChanged(async user => {
      setUserCredential({
        uid: user?.uid,
        email: user?.email,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
        infoToken: {
          accessToken: await user?.getIdToken(),
          refreshToken: user?.refreshToken,
        },
      });

      return !!userCredential;
    });

  const signIn = async ({ email, password }: SignInProps): Promise<any> => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      console.log(user);

      setUserCredential({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        infoToken: {
          accessToken: await user.getIdToken(),
          refreshToken: user.refreshToken,
        },
      });

      return userCredential;
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

      setUserCredential({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        infoToken: {
          accessToken: await user.getIdToken(),
          refreshToken: user.refreshToken,
        },
      });

      return userCredential;
    } catch (error) {
      return error;
    }
  };

  const signOut = () => signOutUser(auth);

  return (
    <AuthContext.Provider
      value={{ userCredential, isAuthenticated, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
