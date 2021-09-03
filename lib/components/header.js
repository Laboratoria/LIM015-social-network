export const headerMobile = () => {
  const header = document.createElement('header');
  header.classList.add('headerMobile');
  header.innerHTML = `
    <img class="mobil-logo" src="./assets/img/logo-mobile.svg" alt="petstagram"/>`;
  return header;
};
