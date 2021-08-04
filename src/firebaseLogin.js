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
        user.updateProfile({
          displayName: username,
        });
      })
      .then(() => {
        window.location.assign('#feed');
        console.log(password, email, username);
      })
    // ...
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  },

  // Inicio de sesion con constrasena e email
  signInFunction: (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .then(() => {
        window.location.assign('#feed');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  },

};

export default firebaseLoginFunctions;
