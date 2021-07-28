import { login } from '../views/login.js';
import { signIn } from '../views/signIn.js';
import { signUp } from '../views/signUp.js';

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

    default:
      containerRoot.innerHTML = '<h2>No existe</h2>';
  }
};

// cambia la ruta, reemplaza el # por un / y
// se cambia el HTML con el return showtemplate
export const changeRouter = (hash) => {
  switch (hash) {
    case '#login':
      window.history.replaceState({}, 'login', '/');
      return showTemplate(hash);

    case '#signIn':
      window.history.replaceState({}, 'signIn', '/signIn');
      return showTemplate(hash);

    case '#signUp':
      window.history.replaceState({}, 'signUp', '/signUp');
      return showTemplate(hash);
  }
};

// se le da funcionalidad correcta a los btn de atras y adelante del navegador
window.onpopstate = (hash) => {
  switch (window.location.pathname) {
    case '/':
      hash = '#login';
      return showTemplate(hash);

    case '/signIn':
      hash = '#signIn';
      return showTemplate(hash);

    case '/signUp':
      hash = '#signUp';
      return showTemplate(hash);
  }
};
