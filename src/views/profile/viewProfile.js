export default () => {
    const infouser = JSON.parse(window.localStorage.getItem('infouser'));
    const isPhotoUrl = /^(http|https):\/\/[^ "]+$/.test(infouser.photoUser);
    const viewProfile = document.createElement('section');
    viewProfile.className = 'container-profile';
    viewProfile.innerHTML = `
    <section class="cover-user">
        <img src="../../images/cover/default.png" alt="cover-user" class="img-cover-user">
        
        <section class="up-information-profile">
            <section class="user-information-profile">
                <img src="${ (isPhotoUrl)? infouser.photoUser : '../../images/profile/' + infouser.photoUser }" alt="" class="avatar avatar-profile">
                <section class="user-name-profile">
                    <p>${infouser.nameUser}</p>
                    <p>Ocupación</p>
                </section>
            </section>
            <section> </section>
            <button class="btn btn-primary"> Editar Perfil </button>  
        </section>        
    </section>

    <section class="container-section-friends" id="section-friends"> 
        <section class="title-friends" id="title-friends"> 
            <button class="btn btn-icon-friends"> <i class="fas fa-user-friends"></i></button>
            <h4> Mis Amigos </h4> 
        </section> 
        <section class="container-friends" id="container-friends">
            <section class="info-friends" id="info-friends"> 
                <img src="../images/algo.jpg" alt="" class="avatar avatar-sm">
                <p>Nombre amigo</p>
                <i class="fas fa-trash-alt"></i>
            </section> 
            <section class="info-friends" id="info-friends"> 
                <img src="" alt="" class="avatar avatar-sm">
                <p>Nombre amigo</p>
                <i class="fas fa-trash-alt"></i>
            </section> 
        </section> 
    </section>   

    <section class="container-section-user-post">
        <section class="header-section-user-post" id="header-section-user-post">
            <section class="action-user-post">
                <section class="title-user-post">
                    <i class="far fa-comments"></i>
                    <h3> Mis Posts </h3>
                </section>
                <section class="title-user-savePost">
                    <i class="far fa-bookmark"></i>
                    <h3> Guardados </h3>
                </section>
            </section>
            <button class="btn btn-create-post"> Crear Publicación <i class="fas fa-plus-circle"></i> </button>
        </section>
        <section class="container-post" id="container-posts-user"> </section>
    </section>   
    `;
    return viewProfile;
}