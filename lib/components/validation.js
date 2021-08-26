export const formValidation = (element) => {
  const inputs = element.querySelectorAll('input[required]');

  inputs.forEach((input) => {
    const span = document.createElement('span');
    span.id = input.name;
    span.textContent = input.title;
    span.classList.add('form-error', 'none');
    if (input.id === 'signUpPassword' || input.id === 'loginPassword') {
      input.parentElement.insertAdjacentElement('afterend', span);
    } else {
      input.insertAdjacentElement('afterend', span);
    }
  });

  // eslint-disable-next-line consistent-return
  document.addEventListener('keyup', (e) => {
    if (e.target.matches('input[required]')) {
      const input = e.target;
      const pattern = input.pattern || input.dataset.pattern;

      if (pattern && input.value !== '') {
        const regex = new RegExp(pattern);
        return !regex.exec(input.value)
          ? document.getElementById(input.name).classList.add('is-active')
          : document.getElementById(input.name).classList.remove('is-active');
      }
      if (!pattern) {
        return input.value === ''
          ? document.getElementById(input.name).classList.add('is-active')
          : document.getElementById(input.name).classList.remove('is-active');
      }
    }
  });
};
