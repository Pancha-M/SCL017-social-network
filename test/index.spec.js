// importamos la funcion que vamos a testear
import { Login } from '../src/login.js';

describe('Login', () => {
  it('deberia ser codigo html', () => {
    const viewLogin = Login();
    expect(viewLogin instanceof HTMLElement).toBe(true);
  });
});
