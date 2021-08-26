const closeModal = (element) => {
  const section = element;
  const closeButton = section.querySelector('.close');
  closeButton.addEventListener('click', () => {
    section.style.display = 'none';
  });
  window.addEventListener('click', (e) => {
    if (e.target === section) {
      section.style.display = 'none';
    }
  });
};

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
  closeModal(section);
  return section;
};
export const emailAlreadyExistsModal = (email) => {
  const section = document.createElement('section');
  section.classList.add('modal');
  section.innerHTML = `
    <section class="modal-content">
      <header class="modal-header">
          <span class="close">&times;</span>
          <h2>¡Esta Cuenta ya existe!</h2>
      </header>
      <main class="modal-body">
          <p>El correo: <span class="modalEmail">${email}</span> ya tiene una cuenta afiliada</p></br>
      </main>
      <footer class="modal-footer">
          <span></span>
      </footer>
    </section>
    `;
  closeModal(section);
  return section;
};
