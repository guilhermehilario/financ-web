import { useState, useEffect } from 'react';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const authentication = getAuth();

type FirebaseAuthRequest = {
  email: string;
  password: string;
};

type FirebaseSignInRequest = FirebaseAuthRequest;

type FirebaseSignUpRequest = FirebaseAuthRequest;

export const useFirebaseSignIn = async ({
  email,
  password,
}: FirebaseSignInRequest) => {
  const response = await signInWithEmailAndPassword(
    authentication,
    email,
    password,
  );

  return response;
};

export const useFirebaseSignUp = async ({
  email,
  password,
}: FirebaseSignUpRequest) => {
  const response = await createUserWithEmailAndPassword(
    authentication,
    email,
    password,
  );

  return response;
};

export const useFirebaseSignOut = async () => {
  signOut(authentication);
};

export const useFirebaseOnAuthentication = () => {
  const [authUser, setAuthUser] = useState<any>(null);

  useEffect(() => {
    const onAuth = onAuthStateChanged(
      authentication,
      response => response && setAuthUser(response),
    );

    return () => onAuth();
  }, []);

  return authUser;
};
