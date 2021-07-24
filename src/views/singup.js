export default () => {
  const sectionElem = document.createElement('section');
  const template = `
<<<<<<< HEAD
    <section id="contenedorView1" class="contenedorView1">
=======
  <section id="contenedorView1" class="contenedorView1">
>>>>>>> 03c04bac4dd40befb1416b680ec1eb4da0850241
    <input type="text" class="registro" id="nombres" placeholder=" Ingresar Nombres">
    <input type="text" class="registro" id="apellidos" placeholder=" Ingresar Apellidos">
    <input type="email" class="registro" id="email" placeholder=" Ingresar Correo Electronico">
    <input type="password" class="registro" id="password" placeholder=" Ingresar Contraseña">
    <input type="submit" href="#/" class="registro" value="Registrar">
  </section>
  `;

  sectionElem.innerHTML = template;

  return sectionElem;
};
