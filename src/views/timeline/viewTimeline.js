export default () => {
    const viewTimeLine = document.createElement('div');
    viewTimeLine.className = 'container-home';
    viewTimeLine.innerHTML = `
    <section class="container-section-categories">
        <section class="titles-categories">
            <h3>Categorías</h3>
            <h3 id="span-all-categories">Ver Todos</h3>
        </section>
        <section class="categories" id="categories"> </section>             
    </section>

    <section class="container-section-post">
        <section class="container-popular-posts" id="popularPost">
            <h2> Popular <span>Posts</span> </h2>
            <section class="popular-posts">
                <span class="btn-carousel">  </span> 
                <section class="slider"> </section>
                <span class="btn-carousel">  </span>
            </section>
        </section>

        <section class="create-publication">
            <button class="btn btn-create-post">Crear Publicación <i class="fas fa-plus-circle"></i> </button>
        </section>

        <section class="container-post" id="container-posts"></section>
        </br>
    </section>

    <section class="modal hide">
        <section class="backdrop" id="modal-contenido"> 
           
        </section>
    </section>

    <section class="modal-delete modal hide">
        <section class="backdrop" id="modal-contenido-delete"> 
           
        </section>
    </section>
    `;
    return viewTimeLine;
}