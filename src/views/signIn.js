import firebaseLoginFunctions from '../firebaseLogin.js';

export const signIn = () => {
  const containerViewSignIn = document.createElement('div');

  const viewSignIn = `<div class="containerLogin">
                            <div class="modal"id="containerModal"></div>
                            <div class="logo">
                              <img src="logoBike.png" alt="logo de la aplicación">
                            </div>
                          <div class="loginElements">
                          <p class="signInTitle">Ingresa tu mail y contraseña</p>
                            <div class="formSignIn">
                                <input type="email" class="inputSignIn" id="inputEmail" placeholder="Email">
                                <input type="password" class="inputSignIn" id="inputPass" placeholder="Contraseña">
                                <p class=passwordRecover>Recuperar Contraseña</p>
                                <button class="signInEmailPass" id="signInEmailPass">Ingresar</button>
                            </div>
                            <div class="socialNetworkButton">
                                <p>Acceder con:</p>
                                <div class="icons">
                                    <button class="googlebtn"  id="googlebtn">
                                    <span class="iconify" id="googleButton" data-inline="false" data-icon="flat-color-icons:google" style="font-size: 35px;">
                                    </span></button>
                                </div>
                                <footer="aboutContainer">
                                  <p class="about">Mas info sobre nuestra comunidad <b>aquí</b></p>
                                </footer>                   
                              </div>
                          </div>
                       </div>`;
  containerViewSignIn.innerHTML = viewSignIn;

  // Iniciar sesion con email y contraseña ya registrada
  const signInEmailPass = containerViewSignIn.querySelector('#signInEmailPass');

  signInEmailPass.addEventListener('click', () => {
    const email = containerViewSignIn.querySelector('#inputEmail').value;
    const password = containerViewSignIn.querySelector('#inputPass').value;
    firebaseLoginFunctions.signInFunction(email, password);
  });

  const googleBtn = containerViewSignIn.querySelector('#googlebtn');
  googleBtn.addEventListener('click', () => {
    firebaseLoginFunctions.signInGoogle();
  });

  return containerViewSignIn;
};
