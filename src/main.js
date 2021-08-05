import { login } from './views/login.js';
import { myFunction } from './lib/index.js';
import { changeRouter } from './lib/router.js';
import { errorPassFunction } from './erroresSignUp.js';

const init = () => {
  document.getElementById('root').appendChild(login());

  window.addEventListener('hashchange', () => {
    myFunction();
    // console.log(window.location.hash);
    changeRouter(window.location.hash);
  });
};

window.addEventListener('load', init);
