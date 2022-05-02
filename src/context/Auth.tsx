import React, { createContext, useContext, useState } from 'react';

import {
  getAuth,
  signOut as signOutUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import '../google-services';

export type Maybe<T> = T | null | undefined;

export type AsyncMaybe<T> = Promise<Maybe<T>>;
type UserCredentialProps = {
  uid: Maybe<string>;
  email: Maybe<string>;
  photoURL: Maybe<string>;
  displayName: Maybe<string>;
  infoToken: {
    accessToken: Maybe<string>;
    refreshToken: Maybe<string>;
  };
};

type AuthProps = {
  email: string;
  password: string;
};

type SignInProps = Pick<AuthProps, 'email' | 'password'>;

type SignUpProps = Pick<AuthProps, 'email' | 'password'>;

type AuthProviderProps = {
  userCredential: UserCredentialProps | undefined;
  isAuthenticated(): Promise<any>;
  signIn({ email, password }: SignInProps): Promise<any>;
  signUp({ email, password }: SignUpProps): Promise<any>;
  signOut(): Promise<any>;
};

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
    });

  const signIn = async ({ email, password }: SignInProps): Promise<any> => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

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

  const signOut = (): Promise<any> => signOutUser(auth);

  return (
    <AuthContext.Provider
      value={{ userCredential, isAuthenticated, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
