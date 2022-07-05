import { AuthContextInitialStateProps } from '../../AuthContext/types';

export type AuthState = AuthContextInitialStateProps;

export type AuthActions =
  | {
      type: 'SIGNIN';
      payload: Partial<AuthState>;
    }
  | {
      type: 'SIGNUP';
      payload: Partial<AuthState>;
    }
  | {
      type: 'SIGNOUT';
      state: AuthState;
    };
