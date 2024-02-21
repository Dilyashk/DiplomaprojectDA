import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAFxxpE0r3k6tSKXYE12_4F0vzIu-vkJLo',
  authDomain: 'geka-37d9f.firebaseapp.com',
  projectId: 'geka-37d9f',
  storageBucket: 'geka-37d9f.appspot.com',
  messagingSenderId: '468416351566861363',
  appId: '1:1025241042379:android:c2688b918faa5e2c4c7a4e',
};

// Ensure firebaseConfig is defined
if (!firebaseConfig) {
  throw new Error('Firebase configuration is missing');
}


// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Use AsyncStorage for persistence
const auth = getAuth(firebaseApp);

const dan = getDan(firebaseApp);



export { auth };
