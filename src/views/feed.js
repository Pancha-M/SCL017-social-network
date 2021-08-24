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

  // Mostrar y actualizar cada vez que se abre el feed o se ingresa un comentario
  postFunctions.observer();
  const userActive = firebase.auth().currentUser.email;

  const userNameActive = firebase.auth().currentUser.displayName;
  const nameUserText = containerViewFeed.querySelector('.nameUser');
  nameUserText.innerText = userNameActive;

  const photoURL = firebase.auth().currentUser.photoURL;
  const imgUser = containerViewFeed.querySelector('.imgUser');
  imgUser.style.backgroundImage = `url(${photoURL})`;
  console.log(photoURL);

  const postContainer = document.createElement('div');
  postFunctions.feedUpdate((querySnapshot) => {
    postContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      docData.id = doc.id;
      postContainer.innerHTML += `<div class="post" id="divPostItems">
                                      <div class="postUser">${docData.user}</div>
                                      <div class="postDate">${docData.date}</div>
                                      <div class="divPostText" id=${docData.id}>
                                        <span id="postText">${docData.post}</span>
                                      </div>
                                      <button class="btn-Like"><span class="iconify" data-inline="false" data-icon="akar-icons:heart" style="color: darkmagenta;"></span></button>
                                    </div>`;
      if (userActive === docData.email) {
        //   const postButtons = containerViewFeed.querySelector('.postButtons');
        //   console.log("soy el div de los botones" + postButtons);
        //   postButtons.style.display = 'block';
        postContainer.innerHTML += `<button class="btn-Edit" id="btn-edit" value=${docData.id}> <span class="iconify" data-inline="false" data-icon="bx:bx-edit" style="color: dimgray;"></span></button>
                                    <button class="noneButtonPost" id="noneButtonPost" value=${docData.id}><span class="iconify" data-icon="bi:check-circle"></span></button> 
                                    <button class="btn-Delete" id="btn-delete" value=${docData.id}><span class="iconify" data-icon="fluent:delete-28-filled" style="color: dimgray;"></span></button>`;
      }
    });

    const buttonsDelete = postContainer.querySelectorAll('#btn-delete');
    buttonsDelete.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (confirm('¿Seguro que quieres eliminar este post?')) {
          console.log(btn.value);
          postFunctions.deletePost(btn.value);
        }
      });
    });

    const buttonsEdit = postContainer.querySelectorAll('#btn-edit');
    buttonsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const db = firebase.firestore();
        const editPost = (id) => db.collection('textPost').doc(id).get();
        const getEditPost = await editPost(e.target.dataset.id);
        const editPostData = getEditPost.data;
        const idPostEdit = (getEditPost.id);
        console.log('EDIT POST', editPost);
        console.log('ID POST EDIT', idPostEdit);
        console.log('getEditPost', getEditPost);
        console.log(editPostData);
        console.log(btn.value);

        const divPostText = postContainer.querySelector(`#${btn.value}`);
        const spanText = divPostText.querySelector('#postText');
        const spanTextValue = spanText.innerText;
        divPostText.innerHTML = `<input class="inputEditText" value='${spanTextValue}'/>`;
        // const editPostButton = postContainer.querySelector('#noneButtonPost');
        // const editPostButtonValue = editPostButton.value;
        // editPostButtonValue.style.display = 'block';

        const divPostTextClass = postContainer.querySelector('.divPostText');
        divPostTextClass.addEventListener('click', async () => {
          const edit = db.collection('textPost').doc(idPostEdit);
          edit.update({
            post: divPostTextClass.querySelector('inputEditText').value,
          });
          const textoEditadoValor = divPostTextClass.querySelector('inputEditText').value;
          console.log('editado', textoEditadoValor);
        });
      });
    });

    // guardar post en coleccion con el boton
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
  });
  containerViewFeed.querySelector('#postContainer').appendChild(postContainer);

  return containerViewFeed;
};
