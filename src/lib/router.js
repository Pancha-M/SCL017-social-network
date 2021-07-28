import { login } from '../views/login.js';
import { signIn } from '../views/signIn.js';
import { signUp } from '../views/signUp.js';

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
