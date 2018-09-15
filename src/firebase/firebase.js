import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAAfcFl1zpQKhFmd_FOxyE9dU2LnBzLd38',
  authDomain: 'my-blog-e5108.firebaseapp.com',
  databaseURL: 'https://my-blog-e5108.firebaseio.com',
  projectId: 'my-blog-e5108',
  storageBucket: 'my-blog-e5108.appspot.com',
  messagingSenderId: '1000164974826'
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
