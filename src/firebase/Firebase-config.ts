import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyB9vM_hFBW3FtTaWrEgSiyTiso_VabNaV4',
  authDomain: 'vin-stomat.firebaseapp.com',
  projectId: 'vin-stomat',
  storageBucket: 'vin-stomat.appspot.com',
  messagingSenderId: '888517581099',
  appId: '1:888517581099:web:2104a39eb211f1a2adcd6e',
});

export default firebase;
