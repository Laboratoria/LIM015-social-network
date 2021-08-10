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
    <header>
        <div class="navLogo">
          <a href="#/"><img src="./img/logoTuristik.png"></a>
        </div>
        <nav>
            <ul>
                <li><a href="#/Home">Home</a></li>
                <li><a href="#/Profile">Profile</a></li>
                <li><a href="#/LogOut">LogOut</a></li>
            </ul>
        </nav>
    </header>
    `;
  sectionNavigator.innerHTML = templateNavigator;
  return sectionNavigator;
};
