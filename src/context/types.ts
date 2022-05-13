export type Maybe<T> = T | null | undefined;

export type AsyncMaybe<T> = Promise<Maybe<T>>;

export type UserCredentialsProps = {
  uid: string;
  photoURL: Maybe<string>;
  displayName: Maybe<string>;
};

export type AuthProps = {
  email: string;
  password: string;
};

export type SignInProps = Pick<AuthProps, 'email' | 'password'>;

export type SignUpProps = Pick<AuthProps, 'email' | 'password'>;

export type AuthProviderProps = {
  isAuthenticated: any;
  userCredentials: Maybe<UserCredentialsProps>;
  signIn({ email, password }: SignInProps): Promise<any>;
  signUp({ email, password }: SignUpProps): Promise<any>;
  signOut(): void;
};
