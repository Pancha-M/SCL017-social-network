import firebaseLoginFunctions from '../firebaseLogin.js';

export const signUp = () => {
  const containerViewSignUp = document.createElement('div');

  const viewSignUp = `<div class="containerLogin">
                        <div class="logo">
                            <img src="img/logoBike.png" alt="logo de la aplicación">
                         
                        </div>
                        <div class="loginElements">
                          <div class="welcome">
                            <p class="welcomeTittle">Bienvenida a la comunidad</p>
                          </div>
                          <div class="formRegister">
                            <input type="text" class="inputName" id="inputName" placeholder="Ingresa nombre de usuaria">
                            <input type="email" class="inputEmail" id="inputEmail" placeholder="Ingresa tu email">
                            <input type="password" class="inputPass" id="inputPass" placeholder="Ingresa una contraseña">
                            <input type="password" class="inputPassAgain" id="inputPassAgain" placeholder="Repetir contraseña">
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
                          <footer="aboutContainer">
                              <p class="about">Mas info sobre nuestra comunidad <b>aquí</b></p>
                          </footer> 
                        </div>  
                      </div>`;
  containerViewSignUp.innerHTML = viewSignUp;

  // Registro con email y contrasena
  const createUserButton = containerViewSignUp.querySelector('.createUserButton');
  
  createUserButton.addEventListener('click', () => {
  
    const elementsSignUp = {
    username: containerViewSignUp.querySelector('.inputName').value,
    email: containerViewSignUp.querySelector('.inputEmail').value,
    password: containerViewSignUp.querySelector('.inputPass').value,
    confirmedPassword: containerViewSignUp.querySelector('.inputPassAgain').value,
  }
  if (elementsSignUp.password === elementsSignUp.confirmedPassword){
    firebaseLoginFunctions.signUpFunction (
      elementsSignUp.password,
      elementsSignUp.email,
      elementsSignUp.username
      
    );
  }else{
    alert("INGRESA BIEN LA HUEA")
  }

  });

  // Inicio sesion con google
  const googleBtn = containerViewSignUp.querySelector('.googlebtn');
  googleBtn.addEventListener('click', () => {
    firebaseLoginFunctions.signInGoogle()
  });

    return containerViewSignUp;

};

