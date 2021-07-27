// Este es el punto de entarda de tu apliciacion
// import firebase from 'firebase/app';
// import 'firebase/auth';

import { login } from './views/login.js';
// import { signIn } from './views/signIn.js';
// import { signUp } from './views/signUp.js';
import { myFunction } from './lib/index.js';
import { changeRouter } from './lib/router.js';

const init = () => {
  document.getElementById('root').innerHTML = login();

  window.addEventListener('hashchange', () => {
    myFunction();
    // console.log(window.location.hash);
    changeRouter(window.location.hash);
  });
};

window.addEventListener('load', init);

// Firebase
let provider = new firebase.auth.GoogleAuthProvider();

// INICIAR SESION CON GOOGLE

const signInGoogle = () => {
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

document.getElementById('google-btn').addEventListener('click', signInGoogle, false);
