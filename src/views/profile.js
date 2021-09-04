export default () => {
  const viewProfile = document.createElement('section');
  viewProfile.classList.add('container-profile');
  viewProfile.innerHTML = `
        <section>
            <p> profile page works ok... 😉</p>
        </section>
        `;
  return viewProfile;
};
