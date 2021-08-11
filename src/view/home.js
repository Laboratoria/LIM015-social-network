export const home = () => {
  const sectionHome = document.createElement('section');
  // const nodo = document.createElement('div');
  sectionHome.classList.add('iHome');
  sectionHome.innerHTML = `
  <h1>HOME</h1>
  `;
  // sectionHome.appendChild(nodo);
  return sectionHome;
};

export const navigator = () => {
  const sectionNavigator = document.createElement('div');
  sectionNavigator.classList.add('navigator');
  const templateNavigator = `
    <header class="header">
      <nav class="nav">
        <a href="#/"><img src="./img/logoTuristik.png" class="imageLogo"></a>
        <button class="navToggle">
          <i class="fas fa-bars"></i>
        </button>
        <ul class="navMenu">
          <li class="navMenuItem"><a href="#/Home" class="navMenuLink navLink">Home</a></li>
          <li class="navMenuItem"><a href="#/Profile" class="navMenuLink navLink">Profile</a></li>
          <li class="navMenuItem"><a href="#/LogOut" class="navMenuLink navLink">LogOut</a></li>
        </ul>
      </nav>
    </header>
    `;
  sectionNavigator.innerHTML = templateNavigator;
  return sectionNavigator;
};
