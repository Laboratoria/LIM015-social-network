import {signOut} from '../firebase/fb-functions.js'

const  viewHeader = () => {
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
          <a href="#/profile" id="navClose" class="navlink"> CERRAR SESION</a>
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
