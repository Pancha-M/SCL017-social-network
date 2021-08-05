import firebaseLoginFunctions from '../firebaseLogin.js';

export const signUp = () => {
  const containerViewSignUp = document.createElement('div');

  const viewSignUp = `<div class="containerLogin">
                        <div class="logo">
                          <img src="logoBike.png" alt="logo de la aplicación">
                         
                        </div>
                        <div class="loginElements">
                          <div class="formRegister">
                            <input type="text" class="inputsignUp" id="inputName" placeholder="Ingresa nombre de usuaria">
                            <input type="email" class="inputsignUp" id="inputEmail" placeholder="Ingresa tu email">
                            <input type="password" class="inputsignUp" id="inputPass" placeholder="Ingresa una contraseña">
                            <input type="password" class="inputsignUp" id="inputPassAgain" placeholder="Repetir contraseña">
                            <button class="createUserButton" id="createUserButton">Registrarme</button>
                          </div>
                          <div class="socialNetworkButton">
                              <p>Acceder con:</p>
                              <div class="icons">
                                <button class="googlebtn" id="googlebtn">
                                <span class="iconify" id="googleButton" data-inline="false" data-icon="flat-color-icons:google" style="font-size: 35px;">
                                </span></button>
                              </div>
                          </div>
                          <div class="modal"id="containerModal">
                          </div>
                          <footer="aboutContainer">
                              <p class="about">Mas info sobre nuestra comunidad <b>aquí</b></p>
                          </footer> 
                        </div>  
                      </div>`;
  containerViewSignUp.innerHTML = viewSignUp;

  // Registro con email y contraseña
  const createUserButton = containerViewSignUp.querySelector('#createUserButton');

  createUserButton.addEventListener('click', () => {
    const elementsSignUp = {
      username: containerViewSignUp.querySelector('#inputName').value,
      email: containerViewSignUp.querySelector('#inputEmail').value,
      password: containerViewSignUp.querySelector('#inputPass').value,
      confirmedPassword: containerViewSignUp.querySelector('#inputPassAgain').value,
    };
    if (elementsSignUp.password === elementsSignUp.confirmedPassword) {
      firebaseLoginFunctions.signUpFunction(
        elementsSignUp.password,
        elementsSignUp.email,
        elementsSignUp.username,

      );
    } else {
      alert('LA CONTRASEÑA NO COINCIDE, PORFAVOR REINTENTA');
    }
  });

  // Inicio sesion con google
  const googleBtn = containerViewSignUp.querySelector('.googlebtn');
  googleBtn.addEventListener('click', () => {
    firebaseLoginFunctions.signInGoogle();
  });

  // VACIAR INPUT AL CERRAR MODAL

  return containerViewSignUp;
};

export const clearPassInputs = () => {
  document.getElementById('inputPass').value = '';
  document.getElementById('inputPassAgain').value = '';
};

export const clearEmailInput = () => {
  document.getElementById('inputEmail').value = '';
};
