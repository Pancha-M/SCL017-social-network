// let htmlCode = ''

// htmlCode += `<p>HOLA</p>`

// divRoot.innerHTML = htmlCode
import { signInGoogle } from '../main.js';

export const login = () => {
  const containerViewLogin = document.createElement('div');

  const viewLogin = `<div class="containerLogin">
                        <div class="logo">
                            <img src="img/logoBike.png" alt="logo de la aplicación">
                        </div>
                        <div class="aboutContainer">
                            <p class="about">Mas info sobre nuestra comunidad <b>aquí</b></p>
                        </div>
                        <div class="loginButtons">
                            <div class="typeButton" id="typeButton">
                                <a href="#signIn" class="signInButton" id="signInButton">Ya tengo una cuenta</a>
                                <a href="#signUp" class="signUpButton" d="signUnButton">Crear una cuenta</a>
                            </div>
                            <div class="socialNetworkButton">
                                <p>Iniciar sesión con:</p>
                                <div class="icons">
                                    <button class="googlebtn"  id="googlebtn">
                                    <span class="iconify" id="googleButton" data-inline="false" data-icon="flat-color-icons:google" style="font-size: 35px;">
                                    </span></button>
                                </div>
                            </div>
                        </div>
                     </div>`;

containerViewLogin.innerHTML = viewLogin;

const googleBtn = containerViewLogin.querySelector('.googlebtn');
console.log(googleBtn);

googleBtn.addEventListener('click',signInGoogle, false);



 return containerViewLogin;
 };
