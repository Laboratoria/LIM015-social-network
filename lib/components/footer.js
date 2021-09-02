export const footerMobile = () => {
  const fragment = document.createDocumentFragment();
  const footer = document.createElement('footer');
  footer.classList.add('footerMobile');
  footer.innerHTML = `
      <nav class="menuMobile">
        <ul>
            <li><a href='#/home'><i class="ai-home icon menu"></i></a></li>
            <li><a href='#/addPost'><img class="icon menu" src="./assets/img/addpost.svg" alt="add post icon"/></a></li>
            <li><a href='#/profile'><img class="icon menu" src="./assets/img/profile.svg" alt="profile icon"/></a></li>
        </ul>
      </nav>`;
  fragment.appendChild(footer);
  return fragment;
};
