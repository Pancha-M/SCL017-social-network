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
        <img class="imgUser" src="" alt="">
        <div class="nameUser"></div>
      </div>
      <form id="formPost" >
      <input class="inputPost" id="inputPost" placeholder="Escribe tu comentario aquí..." cols="30" rows="10"></textarea>
      <button class="buttonPost" id="buttonPost">Comentar</button>
      </form>
    </div>
    <div class="postContainer" id="postContainer"></div>
  </main>      
</div>`;
  containerViewFeed.innerHTML = viewFeed;

  // Mostrar y actualizar cada vez que se abre el feed o se ingresa un comentario
  postFunctions.observer();
  const userActive = firebase.auth().currentUser.email;
  const postContainer = document.createElement('div');
  postFunctions.feedUpdate((querySnapshot) => {
    postContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      docData.id = doc.id;
      console.log(docData);
      postContainer.innerHTML += `<div class="post">
                                      <div class="postUser">${docData.user}</div>
                                      <div class="postDate">${docData.date}</div>
                                      <div class="postPost">${docData.post}</div>
                                      <button class="btn-Like"><span class="iconify" data-inline="false" data-icon="akar-icons:heart" style="color: darkmagenta;"></span></button>
                                    </div>`;
      if (userActive === docData.email) {
        postContainer.innerHTML += `<button class="btn-Edit" id="btn-edit"><span class="iconify" data-inline="false" data-icon="bx:bx-edit" style="color: dimgray;"></span></button>
                                    <button class="btn-Delete" id="btn-delete"><span class="iconify" data-icon="fluent:delete-28-filled" style="color: dimgray;"></span></button>`;
      }

      const buttonDelete = postContainer.querySelector('#btn-delete');
      buttonDelete.addEventListener('click', () => {
        console.log('soy el boton funcionando', docData.id);
        postFunctions.deletePost(docData.id);
      });

      // const buttonEdit = postContainer.querySelector('#btn-edit');
      // const post = containerViewFeed.querySelector('#inputPost').value;
      // console.log(post);
      // console.log(buttonEdit);
      // buttonEdit.addEventListener('click', () => {
      // postFunctions.editPost(docData.id);
    });
  });

  // guardar post en coleccion con el boton
  const formPost = containerViewFeed.querySelector('#formPost');
  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const post = containerViewFeed.querySelector('#inputPost').value;
    postFunctions.savePost(post);
    formPost.reset();
  });

  // });

  containerViewFeed.querySelector('#postContainer').appendChild(postContainer);
  // estos botones no estan en el dom
  // const deleteButton = containerViewFeed.querySelectorAll('#btn-Delete');
  // console.log('botones de borrar', deleteButton);
  // deleteButton.forEach((btn) => {
  //   btn.addEventListener('click', async (e) => {
  //     console.log('hola mundo');
  //     alert(HOLAAAAA);
  //     await postFunctions.deletePost(e.target.dataset.id);
  //   });
  // });

  return containerViewFeed;
};
