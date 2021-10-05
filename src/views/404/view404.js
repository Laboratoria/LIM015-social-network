export default () =>{
    const viewError = document.createElement('div');
    viewError.className = 'container';
    viewError.innerHTML = `
    <section class="page-404">
        <img class="logo" src="../src/images/svg/logo.svg" alt="logo"> 
        <h1 class="number-404"> 404 </h1>
        <p> Página no encontrada </p>
        <section class="text-404"> 
            <p> Lo sentimos no hemos podido encontrar la página que buscas </p> 
        </section>
        <form action="#/login">
            <input type="submit" class="btn btn-primary" value="Inicio" />
        </form>
    </section>`;
return viewError;
}