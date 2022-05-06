import { useState, useEffect } from 'react';

import { getAuth } from 'firebase/auth';

const auth = getAuth();

const useFirebaseAuthentication = () => {
  const [authUser, setAuthUser] = useState<any>(null);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(user => {
      // eslint-disable-next-line no-unused-expressions
      user ? setAuthUser(user) : setAuthUser(null);
    });
    return () => {
      unlisten();
    };
  }, []);

  return authUser;
};

export default useFirebaseAuthentication;
