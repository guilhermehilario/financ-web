import { useEffect, useReducer } from 'react';

import { useRouter } from 'next/router';
import { destroyCookie, setCookie } from 'nookies';

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as signOutSession,
} from 'firebase/auth';

import { auth } from '../../../services/firebase';
import { authReducer } from '../AuthReducer';
import { AuthContext } from '../../AuthContext';
import {
  AuthContextInitialStateProps,
  AUTH_TOKEN,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
} from '../../AuthContext/types';
import { AuthProviderProps, AuthProviderRequest } from './types';

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const initialState: AuthContextInitialStateProps = {
    user: {
      uid: '',
      photoURL: '',
      displayName: '',
    },
    auth: false,
    loading: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  const router = useRouter();

  // It's should be able to verify if user is authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, response => {
      if (response) {
        const { uid, photoURL, displayName } = response;
        const { accessToken, expirationTime } = response['stsTokenManager'];

        dispatch({
          type: SIGNIN,
          payload: { user: { uid, photoURL, displayName } },
        });

        setCookie(undefined, AUTH_TOKEN, accessToken, {
          expires: new Date(expirationTime),
        });
      }
    });

    return () => unsubscribe();
  }, []);

  // It's should be able to sign-in with email and password
  const signIn = async ({
    email,
    password,
  }: AuthProviderRequest): Promise<void> => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const { uid, photoURL, displayName } = user;
      const { accessToken, expirationTime } = user['stsTokenManager'];

      dispatch({
        type: SIGNIN,
        payload: { user: { uid, photoURL, displayName } },
      });

      setCookie(undefined, AUTH_TOKEN, accessToken, {
        expires: new Date(expirationTime),
      });

      router.push('/dashboard');
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // It's should be able to sign-up with email and password
  const signUp = async ({
    email,
    password,
  }: AuthProviderRequest): Promise<void> => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const { uid, photoURL, displayName } = user;
      const { accessToken, expirationTime } = user['stsTokenManager'];

      dispatch({
        type: SIGNUP,
        payload: { user: { uid, photoURL, displayName } },
      });

      setCookie(undefined, AUTH_TOKEN, accessToken, {
        expires: new Date(expirationTime),
      });

      router.push('/dashboard');
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // It's should be able to sign-out
  const signOut = async (): Promise<void> => {
    try {
      await signOutSession(auth);

      dispatch({
        type: SIGNOUT,
        state: { ...initialState, loading: false },
      });

      destroyCookie(undefined, AUTH_TOKEN);

      router.push('/');
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const values = {
    user: state.user,
    auth: state.auth,
    loading: state.loading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
