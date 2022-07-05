import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext/AuthProvider';
import { globalStyles } from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
