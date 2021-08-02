import firebaseLoginFunctions from '../firebaseLogin.js';

export const login = () => {
  const containerViewLogin = document.createElement('div');

  const viewLogin = `<div class="containerLogin">
                            <div class="logo">
                                <img src="../logoBike.png" alt="logo de la aplicación">
                            </div>
                        <div class="loginElements">
                            <div class="typeButton" id="typeButton">
                                <a href="#signIn" class="signInButton" id="signInButton">Ya tengo una cuenta</a>
                                <a href="#signUp" class="signUpButton" d="signUnButton">Crear una cuenta</a>
                            </div>
                            <div class="socialNetworkButton">
                                <p>Acceder con:</p>
                                <div class="icons">
                                <button class="googlebtn"  id="googlebtn">
                                    <span class="iconify" id="googleButton" data-inline="false" data-icon="flat-color-icons:google" style="font-size: 35px;">
                                    </span></button>
                                </div>
                            </div>    
                            <footer="aboutContainer">
                                <p class="about">Mas info sobre nuestra comunidad <b>aquí</b></p>
                            </footer>       
                        </div>
                     </div>`;

  containerViewLogin.innerHTML = viewLogin;

  const googleBtn = containerViewLogin.querySelector('.googlebtn');
  googleBtn.addEventListener('click', () => {
    firebaseLoginFunctions.signInGoogle();
  });

  return containerViewLogin;
};
