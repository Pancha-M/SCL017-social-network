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

// Se le asocia al hash una ruta para que retorne el template
// que se le asocio en la funcion showTemplate
// se reemplaza el # por un /
export const changeRouter = (hash) => {
  if (hash === '#login') {
    window.history.replaceState({}, 'login', '/login');
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
};
