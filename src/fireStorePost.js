const postFunctions = {

  observer: () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userActive = user;
        console.log('Active user');
        console.log(user.email);
        console.log(user.displayName);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // show(user);
        // const emailVerified = user.emailVerified;
        // const uid = user.uid;
        // console.log(emailVerified);
        // console.log(uid);
        // ...
      } else {
        // User is signed out
        console.log('Inactive user');
        // ...
      }
    });
  },

  savePost: (post) => {
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    db.collection('textPost').add({
      user: user.displayName,
      post,
      email: firebase.auth().currentUser.email,
      date: (new Date().toLocaleDateString()),
    //   hour: (new Date().addHours(4)),
    });
  },

  getDocById: (id) => {
    const db = firebase.firestore();
    db.collection('post').doc(id).get();
  },

  feedUpdate: (callback) => {
    const db = firebase.firestore();
    db.collection('textPost').onSnapshot(callback);
  },

  deletePost: (id) => {
    const db = firebase.firestore();
    db.collection('textPost').doc(id).delete();
  },
};

export default postFunctions;
