import * as firebase from 'firebase/compat';
// import 'firebase/compat/auth';
// import  "firebase/auth";
import 'firebase/firestore';
// import 'firebase/compat/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDHjHElik71NQldtz7Wj_xm9ME2IvVNuIk',
  authDomain: 'signalclone-23d05.firebaseapp.com',
  projectId: 'signalclone-23d05',
  storageBucket: 'signalclone-23d05.appspot.com',
  messagingSenderId: '65575781559',
  appId: '1:65575781559:web:d3e946275bc97fa3c03932',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
// const provider= new firebase.auth.GoogleAuthProvider();

export {db, auth};
// export  {db,auth};
