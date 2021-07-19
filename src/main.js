// Este es el punto de entrada de tu aplicacion
import { login } from './login.js';
import { myFunction } from './lib/index.js';

myFunction();

document.getElementById("root").innerHTML= login();