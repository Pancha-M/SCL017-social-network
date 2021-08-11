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
  // const postContainer = containerViewFeed.querySelector('#postContainer');
  // const onGetPost = (callback) => db.collection('textPost').onSnapshot(callback);

  //   onGetPost: (callback) => {
  //     const db = firebase.firestore();
  //     db.collection('textPost').onSnapshot(callback);
  //   },

  //   const onGetPost = (callback) => db.collection('textPost').onSnapshot(callback);

  //   window.addEventListener('DOMContentLoaded', async (e) => {
  //     onGetPost((querySnapshot) => {
  //     // postContainer.innerHTML = '';
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.data());

//         postContainer.innerHTML += `<div class = post>
//       <h5>${doc.data.textPost}</h5>
//       </div>`;
//       });
//     });
//   //   });
// });
};

export default postFunctions;
