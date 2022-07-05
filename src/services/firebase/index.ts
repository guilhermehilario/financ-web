import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { firebaseConfig } from '../../config/firebase-config';

export default initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore();
