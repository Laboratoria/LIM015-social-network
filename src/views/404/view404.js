export default () =>{
    const viewError = document.createElement('div');
    viewError.className = 'container';
    viewError.innerHTML = `
    <section class="page-404">
        <img class="logo" src="../../images/svg/logo.svg" alt="logo"> 
        <p class="number-404"> 404 </p>
        <p> Página no encontrada </p>
        <p> Lo sentimos no hemos podido encontrar la página que buscas </p>
        <button type="button" class="btn btn-primary"> Inicio </button>
    </section>`;
return viewError;
}