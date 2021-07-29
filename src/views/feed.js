// import firebaseLoginFunctions from '../firebaseLogin.js';

export const feed = () => {
    const containerViewFeed = document.createElement('div');
  
    const viewFeed = `<div class="containerLogin">
                            <p>LLEGAMOS AL FEED, YEEEY!</p>
                           </div>`;
  containerViewFeed.innerHTML = viewFeed;
  
    return containerViewFeed;
  };
  