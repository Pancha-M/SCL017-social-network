
export const signIn = () => {
    // const divContainerLogin = document.createElement('div');
    
      const viewSignIn = `<div class="containerLogin">
                            <div class="logo">
                                <img src="img/logoBike.png" alt="logo de la aplicación">
                            </div>
                            <div class="signInInput">
                                <input type="text" id="emailInput" placeholder="Email" class="emailInput"/>
                                <input type="text" id="passwordInput" placeholder="Contraseña" class="passwordInput"/>
                                <button id="signInButton" class="signInButton">Ingresar</button>
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
    
      return viewSignIn;