/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
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
      <input class="inputPost" id="inputPost" placeholder="Escribe tu comentario aquí..." cols="30" rows="10"></input>
      <button class="buttonPost" id="buttonPost">Comentar</button>
      </form>
    </div>
    <div class="postContainer" id="postContainer"></div>
  </main>      
</div>`;
  containerViewFeed.innerHTML = viewFeed;

  // LLAMAMOS AL OBSERVADOR PARA OBTENER USUARIO ACTIVO
  postFunctions.observer();
  const userActive = firebase.auth().currentUser.email;

  // IMPRIMIMOS NOMBRE E IMAGEN DE PERFIL DE GOOGLE DE USUARIO ACTIVO
  const userNameActive = firebase.auth().currentUser.displayName;
  const nameUserText = containerViewFeed.querySelector('.nameUser');
  nameUserText.innerText = userNameActive;

  const photoURL = firebase.auth().currentUser.photoURL;
  const imgUser = containerViewFeed.querySelector('.imgUser');
  imgUser.style.backgroundImage = `url(${photoURL})`;

  // SE MUESTRAN POST ACTUALIZADOS CADA VEZ QUE HAY CAMBIOS EN LA PÁGINA
  const postContainer = document.createElement('div');
  postFunctions.feedUpdate((querySnapshot) => {
    postContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      docData.id = doc.id;
      postContainer.innerHTML += `<div class="post" id="divPostItems">
                                      <div class="postUser">${docData.user}</div>
                                      <div class="postDate">${docData.date}</div>
                                      <div class="divPostText" id="divPost${docData.id}">
                                        <span id="postText${docData.id}">${docData.post}</span>
                                      </div>
                                      <button class="btn-Like"><span class="iconify" data-inline="false" data-icon="akar-icons:heart" style="color: darkmagenta;"></span></button>
                                    </div>`;
      if (userActive === docData.email) {
        postContainer.innerHTML += `<button class="btn-Edit" id="btn-edit" value=${docData.id}> <span class="iconify" data-inline="false" data-icon="bx:bx-edit" style="color: dimgray;"></span></button> 
                                    <button class="btn-Delete" id="btn-delete" value=${docData.id}><span class="iconify" data-icon="fluent:delete-28-filled" style="color: dimgray;"></span></button>`;
      }
    });

    // GUARDAR NUEVO POST EN LA COLECCIÓN
    const formPost = containerViewFeed.querySelector('#formPost');
    formPost.addEventListener('submit', async (e) => {
      e.preventDefault();
      const post = containerViewFeed.querySelector('#inputPost').value;
      if (post === '') {
        alert('Debes ingresar un texto');
      } else {
        postFunctions.savePost(post);
        formPost.reset();
      }
    });

    // ELIMINAR POST
    const buttonsDelete = postContainer.querySelectorAll('#btn-delete');
    buttonsDelete.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (confirm('¿Seguro que quieres eliminar este post?')) {
          postFunctions.deletePost(btn.value);
        }
      });
    });

    // EDITAR POST
    // Reemplazar post por input para poder editar texto
    const buttonsEdit = postContainer.querySelectorAll('#btn-edit');

    buttonsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const db = firebase.firestore();
        const editPost = (id) => db.collection('textPost').doc(id).get();
        const getEditPost = await editPost(btn.value);
        const idPostEdit = (getEditPost.id);

        const divPostText = postContainer.querySelector(`#divPost${btn.value}`);
        const spanText = postContainer.querySelector(`#postText${btn.value}`);
        const spanTextValue = spanText.innerText;
        divPostText.innerHTML = `<input class="inputEditText" value='${spanTextValue}'/>
                                <button class="buttonEditPost"><span class="iconify" data-icon="bi:check-circle"></span></button>`;

        // Se guarda cambio en colección y se muestra actualizado en feed
        const buttonEditPost = postContainer.querySelector('.buttonEditPost');
        buttonEditPost.addEventListener('click', () => {
          const edit = db.collection('textPost').doc(idPostEdit);
          edit.update({
            post: divPostText.querySelector('.inputEditText').value,
          });
        });
      });
    });
  });

  containerViewFeed.querySelector('#postContainer').appendChild(postContainer);

  return containerViewFeed;
};
