import {signOut} from '../firebase/fb-functions.js'

const  viewHeader = () => {
  const header = `

  <header class="header">
  
    <nav class="nav">
      <figure class="nav__logo">
        <a>
          <img  class="header__img" src=" ../img/logosf.png" >
        </a>
      </figure>
  
      <span class="nav__button">
        <i class="nav__i "> </i>
  
      </span>
  
      <ul class="nav__lista">
        <li >
          <a id="navHome" href="#/home" class="nav__link">INICIO</a>
        </li>
        <li >
          <a id="navProfile" href="#/profile" class="nav__link">PERFIL</a>
        </li>
        <li >
          <a href="#/profile" id="navClose" class="nav__link"> CERRAR SESION</a>
        </li>
      </ul>
  
    </nav>
  
  </header>
  `
  const sectionNav =document.createElement('section');
  sectionNav.innerHTML=header;
  const navClose = sectionNav.querySelector('#navClose');
  navClose.addEventListener('click', (event) => {
    event.preventDefault();
    signOut().then(() => {
        console.log('sign Out');
        window.open('#','_self')
    })
  
  });

  return sectionNav
}
 

export {viewHeader};
