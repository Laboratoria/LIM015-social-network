// import { signOutNav } from './signOutn.js'
import { auth } from '../firebase/fb-config.js'
const header = `

<header class="header">

  <nav class="nav">
    <figure class="logoNav">
      <a href=" ">
        <img src=" ../img/logosf.png" >
      </a>
    </figure>

    <span class="btn-menu">
      <i class=" "> </i>

    </span>

    <ul class="navHome">
      <li >
        <a id="navHome" href="#/home" class="navlink">INICIO</a>
      </li>
      <li >
        <a id="navProfile" href="#/profile" class="navlink">PERFIL</a>
      </li>
      <li >
        <button id="navClose" class="navlink"> CERRAR SESION</button>
      </li>
    </ul>

  </nav>

</header>
`
const sectionNav =document.createElement('section');
sectionNav.innerHTML=header;
const navClose = sectionNav.querySelector('#navClose');
console.log(navClose)
navClose.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('sign Out hola')
  auth.signOut().then(() => {
      console.log('sign Out')
  })

});

export {header};