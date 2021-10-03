import { loadEditModal } from "./editProfile.js";
export default () => {
    const viewProfile = document.createElement('section');
    viewProfile.className = 'container-profile';
    viewProfile.innerHTML = `
    <section class="cover-user">
        <img src="" id="img-cover-user" alt="cover-user" class="img-cover-user">
        
        <section class="up-information-profile">
            <section class="user-information-profile">
                <img src="" alt="" class="avatar avatar-profile" id="avatar-user">
                <section class="user-name-profile">
                    <p id="avatar-name"> </p>
                    <p id="avatar-description"> </p>
                </section>
            </section>
            <section> </section>
            <button class="btn btn-secondary" id="btn-editarPerfil"> Editar </button>  
        </section>        
    </section>
    <section class="container-section-friends" id="section-friends"> 
        <section class="title-friends" id="title-friends"> 
            <button class="btn btn-icon-friends"> <i class="fas fa-user-friends"></i> </button>
            <h4> Explorar otros usuarios </h4> 
        </section> 
        <section class="container-friends" id="container-friends"> </section> 
    </section>   
    <section class="container-section-user-post">
        <section class="header-section-user-post" id="header-section-user-post">
            <section class="action-user-post">
                <section class="title-user-post">
                    <i class="far fa-comments"></i>
                    <h3> Posts </h3>
                </section>
            </section>
            <button class="btn btn-create-post" id="btn-crear"> Crear Post <i class="fas fa-plus-circle"></i> </button>
        </section>
        <section class="container-post" id="container-posts"> </section>
    </section>

    <section class="modal hide">
        <section class="backdrop" id="modal-contenido"> 
           
        </section>
    </section>
    
    <section class="modal hide modal-edit-profile">
        <section class="backdrop" id="modal-editProfile"> 
       
        </section>
    </section>

    <section class="modal-delete modal hide">
        <section class="backdrop" id="modal-contenido-delete"> 
           
        </section>
    </section>
    `;
    const viewEditModal = viewProfile.querySelector('#modal-editProfile');
    viewEditModal.innerHTML = loadEditModal();
    return viewProfile;
}