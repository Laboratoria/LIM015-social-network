// Inicio de las publicaciones

export default () => {
  const sectionHome = document.createElement('section');
  const template = `
    <section id="contenedorView2" class="contenedorView2">
    <input type="text" class="registro" id="nombres" placeholder=" Ingresar Nombres">
    <input type="text" class="registro" id="apellidos" placeholder=" Ingresar Apellidos">
    <input type="text" class="registro" id="email" placeholder=" Ingresar Correo Electronico">
    <input type="text" class="registro" id="password" placeholder=" Ingresar Contraseña">
    <input type="submit" href="#/" class="registro" value="Registrar">
    </section>
    `;

  sectionHome.innerHTML = template;
  sectionHome.setAttribute('class', 'contenedorView1');

  return sectionHome;
};
