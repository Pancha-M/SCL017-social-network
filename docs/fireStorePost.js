const postFunctions = {

  observer: () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userActive = user;
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
      like: [],
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
