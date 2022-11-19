// Import the functions you need from the SDKs you need
import 'firebase/remote-config';

import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAt2P55ButFrNmfFvm-f_V6G9Y4CUXt-NM',
  authDomain: 'sabana-d5230.firebaseapp.com',
  databaseURL: 'https://sabana-d5230.firebaseio.com',
  projectId: 'sabana-d5230',
  storageBucket: 'sabana-d5230.appspot.com',
  messagingSenderId: '126788806522',
  appId: '1:126788806522:web:8ef576aa78cbd7442e98c3',
  measurementId: 'G-8MMWF5T4B1',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
