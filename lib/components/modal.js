export const succesfulSignUpModal = (email) => {
  const section = document.createElement('section');
  section.classList.add('modal');
  section.innerHTML = `
  <section class="modal-content">
    <header class="modal-header">
        <span class="close">&times;</span>
        <h2>¡Ya casi está listo!</h2>
    </header>
    <main class="modal-body">
        <p>Hemos enviado un correo a: <span class="modalEmail">${email}</span></p></br>
        <p>Por favor verifique su correo haciendo click en el enlace dentro del mensaje.</p>
    </main>
    <footer class="modal-footer">
        <span>¿No recibió el correo?</span>
        <span id="resendEmail"><b>Reenviar correo</b></span>
    </footer>
  </section>
  `;
  const closeButton = section.querySelector('.close');
  closeButton.addEventListener('click', () => {
    section.style.display = 'none';
  });
  return section;
};
