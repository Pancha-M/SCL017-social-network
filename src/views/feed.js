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
        <div id=photoUser></div>
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
  const postContainer = containerViewFeed.querySelector('.postContainer');
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
                                    <div class="buttonsPost></div>
                                  </div>`;
      if (userActive === docData.email) {
        console.log(`if${userActive}`);
        console.log(`if${docData.email}`);
        //   const postButtons = containerViewFeed.querySelector('.postButtons');
        //   console.log("soy el div de los botones" + postButtons);
        //   postButtons.style.display = 'block';
        postContainer.innerHTML += `
        <button class="editButton" id="editButton"><span class="iconify" data-inline="false" data-icon="bx:bx-edit" style="color: dimgray;"></span></button>
        <button class="deleteButton" id="deleteButton"><span class="iconify" data-inline="false" data-icon="fluent:delete-24-filled" style="color: dimgray;"></span>
        </button>`;
      }
    });
  });

  // guardar post en coleccion con el boton
  const formPost = containerViewFeed.querySelector('#formPost');
  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const post = containerViewFeed.querySelector('#inputPost').value;
    console.log(`soy el input ${post}`);
    console.log(`Soy el boton${formPost}`);
    postFunctions.savePost(post);
    formPost.reset();
  });

  // const deleteButton = containerViewFeed.querySelector('.deleteButton');
  // // deleteButton.forEach((btn) => {
  // deleteButton.addEventListener('click', (e) => {
  //   console.log('me voy a borrar');
  //   // postFunctions.deletePost(e.target.dataset.id);
  // });
  // // });

  return containerViewFeed;
};
