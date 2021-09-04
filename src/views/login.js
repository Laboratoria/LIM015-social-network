export default () => {
  const viewLogin = document.createElement('section');
  viewLogin.classList.add('container');
  viewLogin.innerHTML = `
      <p>this is a login form </p>
      `;
  return viewLogin;
};
