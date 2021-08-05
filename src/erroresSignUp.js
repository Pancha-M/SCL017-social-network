import { clearEmailInput, clearPassInputs } from './views/signUp.js';

export const errorPassFunction = () => {
  const containerErrorPass = document.createElement('div');

  const errorPass = `<div class="feed">
                            <p>Tu contraseña debe tener al menos 6 carácteres, intenta nuevamente</p>
                            <button class="buttonModal" id="buttonErrorPass">Aceptar</button>
                        </div>`;

  containerErrorPass.innerHTML = errorPass;

  containerErrorPass.querySelector('.buttonModal').addEventListener('click', () => {
    containerErrorPass.style.display = 'none';
    containerErrorPass.innerHTML = '';
    clearPassInputs();
  });

  return containerErrorPass;
};

export const errorInvalidEmail = () => {
  const containerInvalidEmail = document.createElement('div');

  const InvalidEmail = `<div class="feed">
                            <p>Ingresa un correo electrónico válido</p>
                            <button class="buttonModal" id="buttonErrorPass">Aceptar</button>
                        </div>`;

  containerInvalidEmail.innerHTML = InvalidEmail;

  containerInvalidEmail.querySelector('.buttonModal').addEventListener('click', () => {
    containerInvalidEmail.style.display = 'none';
    containerInvalidEmail.innerHTML = '';
    clearEmailInput();
    clearPassInputs();
  });

  return containerInvalidEmail;
};
