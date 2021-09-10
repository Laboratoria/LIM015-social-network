export default () => {
  const viewDifferent = `
    <div class="body404">
    <section id="error-page">
      <section class="content">
        <h2 class="header">404</h2>
          <h4>Opps! Page Not Found<</h4>
            <p class="text-404">The specified file was not found on this website. <br> Please click on the button to go back to the main page.</p>
        <section class="bottons">
          <a href="#/">Go Back !😜 </a>
        </section>
      </section>
    </section>
  </section> 
          `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewDifferent;
  return divElemt;
};
