const saludo = require('./index');

test('La funcion saludo devuelve "hola mundo!!"', () => {
  expect(saludo()).toBe("hola mundo!!");
});
