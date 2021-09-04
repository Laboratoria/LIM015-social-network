export default () => {
  const viewRegister = document.createElement('section');
  viewRegister.classList.add('container');
  viewRegister.innerHTML = `
        <section>
          <p>this is a register form </p>
        </section>
        `;
  return viewRegister;
};
