import {
  errorInvalidEmail, errorPassFunction, errorVerifiedEmail, sendMsgEmailVerified,
} from './erroresSignUp.js';

const firebaseLoginFunctions = {
  // ACA DENTRO IRAN LAS FUNCIONESDDE FIREBASE

  // INICIAR SESION CON GOOGLE

  signInGoogle: () => {
    const provider = new firebase.auth.GoogleAuthProvider();

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
      }).then(() => {
        window.location.assign('#feed');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  },

  // REGISTRO DE USUARIO
  signUpFunction: (password, email, username) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    // Signed in
      .then(() => {
        const user = firebase.auth().currentUser;
        console.log(`username${username}`);
        user.updateProfile({
          displayName: username,
        });
        const db = firebase.firestore();
        db.collection('profiles').add({
          userName: username,
          emailUser: email,
        })
          .then((docUser) => {
            console.log('Document written with ID: ', docUser.id);
            user.sendEmailVerification();
            document.getElementById('containerModal').appendChild(sendMsgEmailVerified());
            const modal = document.getElementById('containerModal');
            modal.style.display = 'block';
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
      })

    // ...
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/weak-password') {
          console.log('contrasena muy corta');
          document.getElementById('containerModal').appendChild(errorPassFunction());
          const modal = document.getElementById('containerModal');
          modal.style.display = 'block';
        }
        if (errorCode === 'auth/invalid-email') {
          console.log('Ingresa un email valido');
          document.getElementById('containerModal').appendChild(errorInvalidEmail());
          const modal = document.getElementById('containerModal');
          modal.style.display = 'block';
        }
      });
  },

  // Inicio de sesion con constrasena e email
  signInFunction: (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user && user.emailVerified === true) {
          window.location.assign('#feed');
        } else {
          console.log('Verificar email');
          document.getElementById('containerModal').appendChild(errorVerifiedEmail());
          const modal = document.getElementById('containerModal');
          modal.style.display = 'block';
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  },

};

export default firebaseLoginFunctions;
