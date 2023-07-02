import firebaseAdmin from 'firebase-admin';
import serviceAccount from './firebase-service-account.json';
import { FIREBASE_STORAGE_BUCKET_LINK } from 'src/constants';

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  storageBucket: FIREBASE_STORAGE_BUCKET_LINK
});

export default firebaseAdmin;
