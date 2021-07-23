// Este es el punto de entarda de tu apliciacion
// import firebase from 'firebase/app';
// import 'firebase/auth';

import { login } from './login.js';
import { myFunction } from './lib/index.js';

myFunction();

document.getElementById('root').innerHTML = login();

const provider = new firebase.auth.GoogleAuthProvider();

const googleButton = document.getElementById('googleButton');
// eslint-disable-next-line no-use-before-define
console.log(googleButton);

const signInGoogle = () => {
  console.log('hola soy el boton');
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};

googleButton.addEventListener('click', signInGoogle, false);
