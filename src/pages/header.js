export const header = () => {
  const view = `
  <nav class='menu'>
      <ul>
        <li class='items'>
          <a href='#/'>Login</a>
        </li>
        <li class='items'>
          <a href='#/SignIn'>Sign In</a>
        </li>
        <li class='items'>
          <a href='#/Timeline'>TimeLine</a>
        </li>
      </ul>
    </nav>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};
