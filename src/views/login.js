// let htmlCode = ''

// htmlCode += `<p>HOLA</p>`

// divRoot.innerHTML = htmlCode

export const login = () => {
// const divContainerLogin = document.createElement('div');

const viewLogin = `<div class="containerLogin">
                        <div class="logo">
                            <img src="img/logoBike.png" alt="logo de la aplicación">
                        </div>
                        <div class="aboutContainer">
                            <p class="about">Mas info sobre nuestra comunidad<b>aquí</b></p>
                        </div>
                        <div class="loginButtons">
                            <div class="typeButton" id="typeButton">
                                <button type="button" class="signInButton">Ya tengo una cuenta</button>
                                <button type="button" class="signUpButton">Crear una cuenta</button>
                            </div>
                            <div class="socialNetworkButton">
                                <p>Iniciar sesión con:</p>
                                <div class="icons">
                                <span class="iconify" id="googleButton" data-inline="false" data-icon="flat-color-icons:google" style="font-size: 35px;"></span>
                                <span class="iconify" data-inline="false" data-icon="logos:facebook" style="font-size: 32px;"></span>
                                </div>
                            </div>
                        </div>
                     </div>`;
  // divContainerLogin.appendChild(viewLogin);

  return viewLogin;
};


signInButton.addEventListener('click', viewSignIn);

