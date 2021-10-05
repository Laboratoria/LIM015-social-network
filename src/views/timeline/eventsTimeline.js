import { signOut } from '../../db/firebase-auth.js';
import { sliderPopularPost } from '../../lib/animation.js';
import { getUser } from '../../db/firestore.js';
// const infouser = JSON.parse(window.localStorage.getItem('infouser')); //extraemos lo que almacenamos en local archivo viewHeaderUser line 29
// const nameUserPath = infouser.nameUser.replace(/\s+/g, '');


const addEventsTimeline = async() => {
    document.querySelector('#div-body').className = "bodyBackground"; //cambiamos el background del body

    /***Evento para Salir***/
    const btnSalir = document.querySelector('#logout');
    btnSalir.addEventListener('click', () => {
        signOut().then(() => {
            document.querySelector('#div-body').classList.remove('bodyBackground');
            window.location.hash = '#/login';
        }).catch((error) => {
            alert(error)
        });

    });

    /***Eventos para Abrir y Cerrar Modal***/
    addEventModalCreatePost()

    /***Renderizar TextArea***/
    renderTextareaPosts()

    const url = window.location.href;
    const path = url.split('#')
    if (path[1] == '/timeline') {
        sliderPopularPost();
    }

    addEventLinkUser()
}

const addEventLinkUser = () => {

    //Evento para redireccionar al perfil de un user
    const allLinksUser = document.querySelectorAll('.link-user');
    allLinksUser.forEach(link => {
        link.addEventListener('click', (e) => {
            const idUser = e.target.dataset.id;
            localStorage.setItem('idUserProfile', idUser); //almacenar el id del usuario 
            window.location.href = `#/profile`;
            window.location.reload();
        })
    })
}

const addEventModalCreatePost = () => {
    const modal = document.querySelector('.modal');
    const btnCreatePost = document.querySelector('.btn-create-post'); /* abrir */
    const btnCerrarModal = document.querySelector('.btn-cerrar-modal'); /* cerrar */
    const sectionNameImgUpload = document.querySelector('.name-image-upload');
    btnCreatePost.addEventListener('click', () => {
        const btnModal = document.querySelector('#share-post'); /* abrir */
        const titleModal = document.querySelector('#title-modal');
        const formPost = document.querySelector('#form-create-post');
        formPost.reset();
        document.querySelector('#input-idpost').value = "";
        document.querySelector('#input-urlpost').value = "";
        btnModal.innerText = 'Publicar';
        titleModal.innerText = 'Crear Publicación';
        sectionNameImgUpload.innerHTML = ``;
        modal.classList.add('revelar');
    });

    btnCerrarModal.addEventListener('click', () => {
        modal.classList.remove('revelar')
        document.querySelector('#form-create-post').reset();
    });
}

const renderTextareaPosts = async() => {
        const userPost = document.querySelector('.user-info-textarea');
        const placeholderTextarea = document.querySelector('.textarea-post');
        const idUserAuth = localStorage.getItem('iduser'); //Esto vien de la linea 58 del archivo eventLogin OBTENER EL ID USER
        const infouser = await getUser(idUserAuth).then(response => response.data());
        userPost.innerHTML = `
    <a href="#/profile" class="user-information">  
        <img class="avatar avatar-sm" src="${/^(http|https):\/\/[^ "]+$/.test(infouser.photouser)?infouser.photouser:`../images/profile/`+infouser.photouser}" alt="img-user"> 
        <span> ${infouser.nameuser} </span> 
    </a>
    `
    placeholderTextarea.placeholder = `¿Qué quieres compartir hoy, ${infouser.nameuser}... ?`;
}

export { addEventsTimeline, addEventLinkUser, addEventModalCreatePost, renderTextareaPosts }