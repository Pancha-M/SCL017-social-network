

const db = firebase.firestore();
const buttonPost = document.getElementById('buttonPost');
const postContainer = document.getElementById('postContianer');


const savePost = (post) => db.collection('textPost').doc().set({
  post,
  date: (new Date().toLocaleDateString()),
  //   hour: (new Date().addHours(4)),
});

buttonPost.addEventListener('click', async (e) => {
  const post = document.getElementById('inputPost').value;
  await savePost(post);

  console.log(post);

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
  //   });
});

