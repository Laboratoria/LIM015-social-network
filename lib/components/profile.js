export const profile = () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement('section');
  section.classList.add('profile');
  section.innerHTML = `
        <section class="headerProfile">
        <img id="mainImgProfile" class="mainImgProfile">
        <a><img class="icon" src="./assets/img/pen.svg" alt="pen icon"/></i></a>
        <a><img class="icon" src="./assets/img/signout.svg" alt="signout icon"/></i></a>
        <img id="circleImgProfile" class="circleImgProfile">
        <label>
            <h2 id="nameProfile"></h2>
            <label>
                <span id="numberFollowers" class="profileNumbers"></span><span class="textProfile">Seguidores</span>
                <span id="numberFollowing" class="profileNumbers"></span><span class="textProfile">Siguiendo</span>
            </label>
            <p id="profileDescription" class="textProfile"></p>
            <span class="textProfile">Sigue mis aventuras en este perfil</span>
            <span id="profileUbication" class="textProfile"></span>
        </label>
        </section>

        <section id="mainProfile" class="mainProfile">
        </section>`;
  fragment.appendChild(section);
  return fragment;
};
