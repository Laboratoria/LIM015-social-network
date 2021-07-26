export default () => {
  const sectionSingUp = document.createElement('section');
  const template = `
  <section id="contenedorView1" class="contenedorView1">
    <input type="text" class="registro" id="nombres" placeholder=" Ingresar Nombres" required>
    <input type="text" class="registro" id="apellidos" placeholder=" Ingresar Apellidos" required>
    <input type="email" class="registro" id="email" placeholder=" Ingresar Correo Electronico" required>
    <input type="password" class="registro" id="password" placeholder=" Ingresar Contraseña" required>
    <input type="submit" href="#/" class="registro" value="Registrar">
  </section>
  `;

  sectionSingUp.innerHTML = template;
  sectionSingUp.setAttribute('class', 'contenedorView1');

  return sectionSingUp;
};
