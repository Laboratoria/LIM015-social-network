// Inicio de las publicaciones

export default () => {
  const sectionHome = document.createElement('section');
  const template = `
    <section id="contenedorHome" class="contenedorHome">
    <nav class="nav-bar" id="nav">
      <ul>
        <li><a href="#/home">Home</a></li>
        <li><a href="#/profile">Profile</a></li>
        <li><a href="#/">Sign-Out</a></li>
      </ul>
    </nav>
    <input type="text" class="registro" id="nombres" placeholder=" Ingresar Nombres">
    <input type="text" class="registro" id="apellidos" placeholder=" Ingresar Apellidos">
    <input type="text" class="registro" id="email" placeholder=" Ingresar Correo Electronico">
    <input type="text" class="registro" id="password" placeholder=" Ingresar Contraseña">
    <input type="submit" href="#/" class="registro" value="Registrar">


    <footer class="footer">
      <p>&#169 iBook 2021</p>
    </footer>
    </section>
    `;
  sectionHome.innerHTML = template;
  sectionHome.setAttribute('class', 'contenedor-Home');

  return sectionHome;
};
