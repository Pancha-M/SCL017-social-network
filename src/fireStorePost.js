const postFunctions = {

  savePost: (post) => {
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    db.collection('textPost').add({
      user: user.displayName,
      post,
      date: (new Date().toLocaleDateString()),
    //   hour: (new Date().addHours(4)),
    });
  },

  feedUpdate: (callback) => {
    const db = firebase.firestore();
    db.collection('textPost').onSnapshot(callback);
  },

};

export default postFunctions;
