import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCq1Ff7eGChh5p7yNWe7Zn0uD_PNwSU3pw',
	authDomain: 'codigo-facilito-lasfito.firebaseapp.com',
	projectId: 'codigo-facilito-lasfito',
	storageBucket: 'codigo-facilito-lasfito.appspot.com',
	messagingSenderId: '898319033553',
	appId: '1:898319033553:web:b23e678f904ebd776911f0',
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export default firebaseApp;
