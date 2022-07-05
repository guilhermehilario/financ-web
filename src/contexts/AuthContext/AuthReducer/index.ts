import { SIGNIN, SIGNUP, SIGNOUT } from '../types';
import { AuthState, AuthActions } from './types';

export const authReducer = (
  state: AuthState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        user: action.payload.user,
        auth: true,
        loading: false,
      };

    case SIGNUP:
      return {
        ...state,
        user: action.payload.user,
        auth: true,
        loading: false,
      };

    case SIGNOUT:
      return { ...action.state };

    default:
      return state;
  }
};
