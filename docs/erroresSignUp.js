// ERROR PASS NO ES UN STRING
export const errorPassFunction = () => {
  const containerErrorPass = document.createElement('div');

  const errorPass = `<div class="msgError">
                            <p>Tu contraseña debe tener al menos 6 carácteres, intenta nuevamente</p>
                            <button class="buttonModal" id="buttonErrorPass">Aceptar</button>
                        </div>`;

  containerErrorPass.innerHTML = errorPass;

  containerErrorPass.querySelector('.buttonModal').addEventListener('click', () => {
    containerErrorPass.style.display = 'none';
    containerErrorPass.innerHTML = '';
    const modal = document.getElementById('containerModal');
    modal.style.display = 'none';
    document.getElementById('inputPass').value = '';
    document.getElementById('inputPassAgain').value = '';
  });

  return containerErrorPass;
};

// ERROR EMAIL INVALIDO
export const errorInvalidEmail = () => {
  const containerInvalidEmail = document.createElement('div');

  const InvalidEmail = `<div class="msgError">
                            <p>Ingresa un correo electrónico válido</p>
                            <button class="buttonModal" id="buttonErrorPass">Aceptar</button>
                        </div>`;

  containerInvalidEmail.innerHTML = InvalidEmail;

  containerInvalidEmail.querySelector('.buttonModal').addEventListener('click', () => {
    containerInvalidEmail.style.display = 'none';
    containerInvalidEmail.innerHTML = '';
    const modal = document.getElementById('containerModal');
    modal.style.display = 'none';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputPass').value = '';
    document.getElementById('inputPassAgain').value = '';
  });

  return containerInvalidEmail;
};

export const sendMsgEmailVerified = () => {
  const containerMsgEmailVerified = document.createElement('div');

  const msgEmailVerified = `<div class="msgError">
                            <p>Te hemos enviado un correo de verificación</p>
                            <button class="buttonModal" id="buttonErrorPass">Aceptar</button>
                        </div>`;

  containerMsgEmailVerified.innerHTML = msgEmailVerified;

  containerMsgEmailVerified.querySelector('.buttonModal').addEventListener('click', () => {
    containerMsgEmailVerified.style.display = 'none';
    containerMsgEmailVerified.innerHTML = '';
    const modal = document.getElementById('containerModal');
    modal.style.display = 'none';
    window.location.assign('#signIn');
  });

  return containerMsgEmailVerified;
};

// ERROR EMAIL NO VERIFICADO
export const errorVerifiedEmail = () => {
  const containerVerifiedEmail = document.createElement('div');

  const verifiedEmail = `<div class="msgError">
                            <p>Verifica tu correo electrónico</p>
                            <button class="buttonModal" id="buttonErrorPass">Aceptar</button>
                        </div>`;

  containerVerifiedEmail.innerHTML = verifiedEmail;

  containerVerifiedEmail.querySelector('.buttonModal').addEventListener('click', () => {
    containerVerifiedEmail.style.display = 'none';
    containerVerifiedEmail.innerHTML = '';
    const modal = document.getElementById('containerModal');
    modal.style.display = 'none';
    document.getElementById('inputEmail').value = '';
  });

  return containerVerifiedEmail;
};
