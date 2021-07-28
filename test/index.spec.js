// importamos la funcion que vamos a testear
import { login } from '../src/views/login.js';

describe('login', () => {
  it('deberia ser un elemento HTML, () => {
    const viewLogin = login();
    expect(viewLogin instanceof HTMLElement).toBe(true);
  });
});
