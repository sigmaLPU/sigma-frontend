// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZi_2L8V2AAfdGvvaMg4sAHUBtZ6vTlLs',
  authDomain: 'sigma-lpu-ebb22.firebaseapp.com',
  projectId: 'sigma-lpu-ebb22',
  storageBucket: 'sigma-lpu-ebb22.appspot.com',
  messagingSenderId: '248286719265',
  appId: '1:248286719265:web:10d87d53e7e4d0d1902260',
  measurementId: 'G-S9Z9664R72',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

