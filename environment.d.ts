declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_KEY: string;
      NEXT_PUBLIC_AUTH_DOMAIN: string;
      NEXT_PUBLIC_PROJECT_ID: string;
      NEXT_PUBLIC_STORAGE: string;
      NEXT_PUBLIC_MESSAGING_SENDER_ID: string;
      NEXT_PUBLIC_ID: string;
      NEXT_PUBLIC_MEASUREMENT_ID: string;
    }
  }
}
export {};
