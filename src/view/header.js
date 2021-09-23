import {signOut} from '../firebase/fb-functions.js'

const  viewHeader = () => {
  const header =/*html*/ `

  <header class="header">
  
    <nav class="nav">
        <div class="nav__logo">
          <img  class="header__logo" src=" ../img/logoHeader.png" >
        </div>
        <input type="checkbox" class="checking" id="check">
        <label for="check" class="bar-btn">
        <i class="fas fa-bars"></i>
        </label>
   
      <ul class="nav__menu">
        <li  >
          <a id="navHome" href="#/home" class="nav__link ">INICIO</a>
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
