const functionsPost = {

  savePost: () => {
    const db = firebase.firestore();
    const textPost = document.getElementById('inputPost').value;
    db.collection('textPost').add({
      textPost,
      date: (new Date().toLocaleDateString()),
    //   hour: (new Date().addHours(4)),
    });
  },

};

export default functionsPost;
