export default () => {
    const viewTimeLine = document.createElement('div');
    viewTimeLine.className = 'container-home';
    viewTimeLine.innerHTML = `        
    <section class="header">
        <img class="logo" src="../images/svg/logo.svg" alt="logo">
        <img class="icon-logo" src="../images/svg/favicon.svg" alt="logo">
        <section class="input-search">
            <input type="text" name="" id="">
            <div class="container-icon-search"> </div>
            <i class="fas fa-search"></i>
        </section>
        <div class="side-navigation">
            <section class="title-posts">
                <i class="fas fa-house-user"></i>
                <h2>Posts</h2>
            </section>
            <section class="title-turn-off">
                <i class="fas fa-sign-out-alt"></i>
                <p>Salir</p>
            </section>
            <section class="user-information">
                <p>Nombre</p>
                <img class="avatar avatar-sm" src="" alt="img-user">
            </section>
        </div>
    </section>

    <section class="container-section-categories">
        <section class="titles-categories">
            <h3>Categorías</h3>
            <h3>Ver Todos</h3>
        </section>
        <section class="categories">
            <figure class="category">
                <img src="./images/svg/logo-programming" alt="logo-programming">
                <div class="content-category">
                    <h4>Programación</h4>
                    <p class="text-muted">30 post</p>
                </div>
            </figure>
            <figure class="category">
                <img src="./images/svg/logo-graphic-design" alt="logo-graphic-design">
                <div class="content-category">
                    <h4>Programación</h4>
                    <p class="text-muted">30 post</p>
                </div>
            </figure>                             
            <figure class="category">
                <img src="./images/svg/logo-education" alt="logo-education">
                <div class="content-category">
                    <h4>Programación</h4>
                    <p class="text-muted">30 post</p>
                </div>
            </figure>                              
            <figure class="category">
                <img src="./images/svg/logo-programming" alt="logo-programming">
                <div class="content-category">
                    <h4>Programación</h4>
                    <p class="text-muted">30 post</p>
                </div>
            </figure>  
        </section>             
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
            <button class="btn">Crear Publicación <i class="fas fa-plus-circle"></i> </button>
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
    `;
    return viewTimeLine;
}