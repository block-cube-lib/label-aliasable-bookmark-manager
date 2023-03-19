import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebaseui';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { User, UserConverter } from '../entities/user';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getFirestore(app);

auth.onAuthStateChanged(async (user) => {
  if (user) {
    const userDocumentRef = doc(database, 'users', user.uid);
    console.log(`userDocumentRef:  ${userDocumentRef != null}`);
    const userDocument = await getDoc(userDocumentRef);
    console.log(`userDocument:  ${userDocument != null}`);
    console.log(`userDocument.exists():  ${userDocument.exists()}`);
    if (!userDocument.exists()) {
      const userRecord = new User(
        user.uid,
        user.displayName ?? user.uid,
        user.email,
        serverTimestamp()
      );
      await setDoc(userDocumentRef, UserConverter.toFirestore(userRecord));
    }
  }
});

export { app, auth, database };
