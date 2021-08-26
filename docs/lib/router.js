import { login } from '../views/login.js';
import { signIn } from '../views/signIn.js';
import { signUp } from '../views/signUp.js';
import { feed } from '../views/feed.js';

// Se crean casos para que al presionar cada "boton", se reemplace el html dinamico de la pagina
const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#login':
      containerRoot.appendChild(login());
      break;

    case '#signIn':
      containerRoot.appendChild(signIn());
      break;

    case '#signUp':
      containerRoot.appendChild(signUp());
      break;

    case '#feed':
      containerRoot.appendChild(feed());
      break;

    default:
      containerRoot.innerHTML = '<h2>No existe</h2>';
  }
};

// cambia la ruta, reemplaza el # por un / y
// se cambia el HTML con el return showtemplate
export const changeRouter = (hash) => {
  if (hash === '#login') {
    window.history.replaceState({}, 'login', '/');
    return showTemplate(hash);
  }
  if (hash === '#signIn') {
    window.history.replaceState({}, 'signIn', '/signIn');
    return showTemplate(hash);
  }
  if (hash === '#signUp') {
    window.history.replaceState({}, 'signUp', '/signUp');
    return showTemplate(hash);
  }

  if (hash === '#feed') {
    window.history.replaceState({}, 'feed', '/feed');
    return showTemplate(hash);
  }
};

// se le da funcionalidad correcta a los btn de atras y adelante del navegador
window.onpopstate = (hash) => {
  if (window.location.pathname === '') {
    hash = '#login';
    return showTemplate(hash);
  }
  if (window.location.pathname === '/signIn') {
    hash = '#signIn';
    return showTemplate(hash);
  }
  if (window.location.pathname === '/signUp') {
    hash = '#signUp';
    return showTemplate(hash);
  }
  if (window.location.reload === true){
    window.location.href.substr(0, window.location.href.indexOf('#'))
    return showTemplate(hash);
  }
};
