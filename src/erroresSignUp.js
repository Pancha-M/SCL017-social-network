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
  });

  return containerErrorPass;
};

export const errorEmailExist = () => {
  const containerEmailExist = document.createElement('div');

  const EmailExist = `<div class="feed">
                            <p>Este correo electrónico ya está asociado a una cuenta</p>
                            <button class="buttonModal" id="buttonErrorPass">Aceptar</button>
                        </div>`;

  containerEmailExist.innerHTML = EmailExist;

  // containerEmailExist.querySelector('.buttonModal').addEventListener('click', () => {
  //   containerEmailExist.style.display = 'none';
  //   containerEmailExist.innerHTML = '';
  // });

  return containerEmailExist;
};
