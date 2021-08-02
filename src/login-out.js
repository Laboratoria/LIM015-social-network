const ingresar = document.getElementById('ingresar');
const registrar = document.getElementById('registrar');
const container = document.querySelector('.container');

registrar.addEventListener('click', () => {
// console.log('registrar');
  container.classList.add('modoRegistro');
});

ingresar.addEventListener('click', () => {
  container.classList.remove('modoRegistro');
});
