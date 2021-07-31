import * as firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyCczuQDAvuOtuQ42NVQkzQXkvc2q3njfEg',
  authDomain: 'todo-42058.firebaseapp.com',
  databaseURL: 'https://todo-42058-default-rtdb.firebaseio.com',
  projectId: 'todo-42058',
  storageBucket: 'todo-42058.appspot.com',
  messagingSenderId: '1016604484693',
  appId: '1:1016604484693:web:822371d36226cb3e1060dc',
  measurementId: 'G-Q6BZC4DMV7'
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const database = firebase.database().ref('/notes');

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, auth, database, googleProvider };
