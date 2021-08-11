import postFunctions from '../fireStorePost.js';

export const feed = () => {
  const containerViewFeed = document.createElement('div');

  const viewFeed = `<div class="feed">
  <nav>
  <header>
      <h1 class="womanbike">WOMANBIKE</H1>
  </header>
      <div class="iconsNav">
        <button class="searchIcon" id="searchIcon">
           <span class="iconify" data-inline="false" data-icon="ion:search-circle"></span>
        </button> 
        <button class="homeIcon" id="homeIcon">
           <span class="iconify" data-inline="false" data-icon="bx:bxs-home-heart"></span>
        </button>
        <button class="profileIcon" id="profileIcon">
           <span class="iconify" data-inline="false" data-icon="carbon:user-avatar-filled"></span>
        </button> 
        <button class="menuIcon" id="menuIcon">
           <span class="iconify" data-inline="false" data-icon="entypo:menu"></span>
        </button> 
      </div>
  </nav>
  <main>
    <div class="postUserContainer">
      <div class="user">
        <img class="imgUser" src="" alt="FotoPerfilUsuaria">
        <div class="nameUser"></div>
      </div>
      <form id="formPost" >
      <input class="inputPost" id="inputPost" placeholder="Escribe tu comentario aquí..." cols="30" rows="10"></textarea>
      <button class="buttonPost" id="buttonPost">Comentar</button>
      </form>
    </div>
    <div id="postContainer"></div>
  </main>      
</div>`;
  containerViewFeed.innerHTML = viewFeed;

  const formPost = containerViewFeed.querySelector('#formPost');
  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const post = containerViewFeed.querySelector('#inputPost').value;
    console.log(`soy el input ${post}`);
    console.log(`Soy el boton${formPost}`);
    postFunctions.savePost(post);
    formPost.reset();

    const db = firebase.firestore();
    const coleccionTextPost = db.collection('textPost');
    console.log(coleccionTextPost);
    coleccionTextPost.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        console.log(docData);
        // const viewPost = () => {
        const postContainer = containerViewFeed.querySelector('#postContainer');
        postContainer.innerHTML += `<div class="post">
                                      <p>${docData.user}</p>
                                      <p>${docData.post}</p>
                                      <p>${docData.date}</p>
                                    </div>`;
        // };
      });
    });
  });

  //   window.addEventListener("load", () => {
  //     firebaseLoginFunctions.showUser;
  //   });

  // const db = firebase.firestore();
  // const coleccionTextPost = db.collection('textPost');
  // console.log(coleccionTextPost);
  // coleccionTextPost.get().then(querySnapshot=>{

  //   querySnapshot.forEach(doc=>{
  //     console.log(viewPost(doc));
  //   })  ``

  // })

  // const viewPost = () => {
  //   const containerPost = containerViewFeed.querySelector('#containerPost');
  //   containerPost.innerHTML += `<p>${doc.data()}</p>`;

  // }

  // const postContainer = containerViewFeed.querySelector('#postContainer');
  // const onGetPost = (callback) => db.collection('textPost').onSnapshot(callback);

  // window.addEventListener('DOMContentLoaded', async (e) => {
  //   onGetPost((querySnapshot) => {
  //     // postContainer.innerHTML = '';
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.data());

  //       const postData = doc.data();

  //       postContainer.innerHTML += `<div class = post>
  //                                    <h5>${postData.textPost}</h5>
  //                                      </div>`;
  //     });
  //   });
  // });

  return containerViewFeed;
};
