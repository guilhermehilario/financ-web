import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { parseCookies } from 'nookies';

import { AUTH_TOKEN } from '../contexts/AuthContext/types';

export function withSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    const token = cookies[AUTH_TOKEN];

    if (token) {
      return {
        redirect: {
          destination: '/home',
          permanent: false,
        },
      };
    }

    return await fn(ctx);
  };
}
