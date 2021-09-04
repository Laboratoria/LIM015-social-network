export default () => {
  const viewCommunity = document.createElement('section');
  viewCommunity.classList.add('container-community');
  viewCommunity.innerHTML = `
          <section>
            <p> main page works ok... 😉</p>
          </section>
          `;
  return viewCommunity;
};
