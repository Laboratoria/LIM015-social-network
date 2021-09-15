export default () => {
    const viewTimeLine = document.createElement('div');
    viewTimeLine.className = 'container-home';
    viewTimeLine.innerHTML = `
    <section class="container-section-categories">
        <section class="titles-categories">
            <h3>Categorías</h3>
            <h3>Ver Todos</h3>
        </section>
        <section class="categories" id="categories"> </section>             
    </section>

    <section class="container-section-post">
        <section class="container-popular-posts">
            <h2>Popular <span>Posts</span> </h2>
            <section class="popular-posts">
                <section class="card-post"></section>
                <section class="card-post"></section>               
                <section class="card-post"></section>
            </section>
        </section>

        <section class="create-publication">
            <button class="btn btn-create-post">Crear Publicación <i class="fas fa-plus-circle"></i> </button>
        </section>

        <section class="container-posts">
            <section class="personal-information">
                <img src="" alt="">
                <p>Nombre</p>
                <p>Fecha</p>
                <h4>Programación</h4>
            </section>
            <section class="content-post">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, minima quis velit, possimus tempora quos optio minus libero facilis totam, corporis praesentium!</p>
            </section>
            <section class="reactions">
                <section class="react-heart"></section>
                <section class="react-comment"></section>
                <section class="react-save"></section>
            </section>
            <section class="container-comment-response">
                <img src="" alt="">
                <p>Nombre</p>
                <p>Autem quae ullam quam ipsam. Nam at consectetur quam, maxime necessitatibus fugiat aut est excepturi dolorem ipsum explicabo vero omnis enim error.</p>
            </section>
        </section>
    </section>

    <section class="modal hide">
        <section class="backdrop"> 
            <section class="content-modal"> 
                <section class="head-modal">
                    <span> </span>
                    <span> Crear publicación </span>
                    <button class="btn btn-cerrar-modal"> X </button> 
                </section>
                <section class="body-modal">
                    <img class="avatar avatar-sm" src="" alt="img-user">
                    <span> Nombre </span> 
                    
                    <section class="textarea-group">
                        <textarea class="textarea-post" id="post-user" row="4" placeholder="¿Qué estás pensando, Nombre?"></textarea>
                        <i class="far fa-smile"></i>
                    </section>

                    <section class="emoji-group">
                        <span id="emoji1"> &#128512; </span> 
                        <span id="emoji2"> &#128513; </span> 
                        <span id="emoji3"> &#128514; </span> 
                        <span id="emoji4"> &#128515; </span> 
                        <span id="emoji5"> &#128516; </span> 
                        <span id="emoji6"> &#128517; </span> 
                        <span id="emoji7"> &#128518; </span> 
                        <span id="emoji8"> &#128519; </span> 
                        <span id="emoji9"> &#128520; </span> 
                        <span id="emoji10"> &#128521; </span> 
                        <span id="emoji11"> &#128522; </span> 
                        <span id="emoji12"> &#128523; </span> 
                        <span id="emoji13"> &#128524; </span> 
                        <span id="emoji14"> &#128525; </span> 
                        <span id="emoji15"> &#128526; </span> 
                        <span id="emoji16"> &#128527; </span> 
                        <span id="emoji17"> &#128528; </span> 
                        <span id="emoji18"> &#128529; </span> 
                        <span id="emoji19"> &#128530; </span> 
                        <span id="emoji20"> &#128531; </span> 
                        <span id="emoji21"> &#128532; </span> 
                        <span id="emoji22"> &#128533; </span> 
                        <span id="emoji23"> &#128534; </span> 
                        <span id="emoji24"> &#128535; </span> 
                        <span id="emoji25"> &#128536; </span> 
                        <span id="emoji26"> &#128537; </span> 
                        <span id="emoji27"> &#128538; </span> 
                        <span id="emoji28"> &#128539; </span> 
                        <span id="emoji29"> &#128540; </span> 
                        <span id="emoji30"> &#128541; </span> 
                        <span id="emoji31"> &#128542; </span> 
                        <span id="emoji31"> &#128543; </span> 
                        <span id="emoji31"> &#128544; </span> 
                        <span id="emoji31"> &#128545; </span> 
                        <span id="emoji31"> &#128546; </span> 
                        <span id="emoji31"> &#128547; </span> 
                        <span id="emoji31"> &#128548; </span> 
                        <span id="emoji31"> &#128549; </span> 
                        <span id="emoji31"> &#128550; </span>                     
                    </section>

                    <section class="reaction-post">
                        <button class="btn-like" id="share-post"> <i class="far fa-heart"></i> </button>
                        <button class="btn-comment" id="share-post"> <i class="far fa-comment-dots"></i> </button>
                        <button class="btn-save" id="share-post"> <i class="far fa-bookmark"></i> </button>
                    </section>
                </section>
            <button class="btn btn-create-post" id="share-post"> Publicar </button>
            </section>
        </section>
    </section>
    `;
    const modal = viewTimeLine.querySelector('.modal');
    const btnCreatePost = viewTimeLine.querySelector('.btn-create-post');
    const btnCerrarModal = viewTimeLine.querySelector('.btn-cerrar-modal');
    btnCreatePost.addEventListener('click', openModal);
    btnCerrarModal.addEventListener('click', cerrarModal);
    function openModal() {
        modal.classList.add('revelar')
    }
    function cerrarModal() {
        modal.classList.remove('revelar')
    }
    // //Inserta emoji en textarea
    const textarea = viewTimeLine.querySelector('.textarea-post');
    console.log(textarea)

    // textarea.addEventListener('click', () => {
    //     
    // })

    return viewTimeLine;
}