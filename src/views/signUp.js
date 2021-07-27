export const signUp = () => {

  const divContainerSignUp = document.createElement('div');

  const viewSignUp = `<div class="containerLogin">
      <div class="logo">
          <img src="img/logoBike.png" alt="logo de la aplicación">
      </div>
      <div class="welcome">
          <p class="welcome">Bienvenida a la comunidad</p>
      </div>
      <div class="formRegister">
         <input type="text" class="inputName" id="inputName" placeholder="Ingresa nombre de usuaria">
         <input type="email" class="inputEmail" id="inputEmail" placeholder="Ingresa tu email">
         <input type="password" class="inputPass" id="inputPass" placeholder="Ingresa una contraseña">
         <input type="password" class="inputPassAgain" id="inputPassAgain" placeholder="Repetir contraseña">
         <button class="registerButton" id="registerButton">Registrarme</button>
      </div>
          <div class="socialNetworkButton">
              <p>Iniciar sesión con:</p>
              <div class="icons">
              <span class="iconify" id="googleButton" data-inline="false" data-icon="flat-color-icons:google" style="font-size: 35px;"></span>
              </div>
          </div>
    </div>`;
  divContainerSignUp.innerHTML = viewSignUp;
  return divContainerSignUp;
};
