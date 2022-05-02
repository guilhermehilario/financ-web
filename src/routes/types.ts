export type Maybe<T> = T | null | undefined;

export type AsyncMaybe<T> = Promise<Maybe<T>>;

export type UserCredentialProps = {
  uid: Maybe<string>;
  email: Maybe<string>;
  photoURL: Maybe<string>;
  displayName: Maybe<string>;
  infoToken: {
    accessToken: Maybe<string>;
    refreshToken: Maybe<string>;
  };
};

export type AuthProps = {
  email: string;
  password: string;
};

export type SignInProps = Pick<AuthProps, 'email' | 'password'>;

export type SignUpProps = Pick<AuthProps, 'email' | 'password'>;

export type AuthProviderProps = {
  userCredential: UserCredentialProps | undefined;
  isAuthenticated(): Promise<any>;
  signIn({ email, password }: SignInProps): Promise<any>;
  signUp({ email, password }: SignUpProps): Promise<any>;
  signOut(): Promise<any>;
};
