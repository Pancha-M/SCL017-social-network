import { login } from './views/login.js';
import { signIn } from './views/signIn.js';
import { signUp } from './views/signUp.js';

export const changeRouter = (hash) => {
  if (hash == '#/login') {
    return showTemplate(hash);
  }

  if (hash === '#/signIn') {
    return showTemplate(hash);
  }

  if else (hash === '#/signUp') {
    return showTemplate(hash);
  }
};

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/login':
      containerRoot.appendChild(login());
      break;

    case '#/signIn':
      containerRoot.appendChild(signIn());
      break;

    case '#/signUn':
      containerRoot.appendChild(signUn());
      break;

    default:
        containerRoot.innerHTML= `<h2>No existe</h2>`
  }
};
