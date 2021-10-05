import { getPostUser, updateProfileUser, getUser, getTopTenUsers} from "../../db/firestore.js";
import { loadViewPost } from "../timeline/viewPosts.js";
import { saveImageFile } from "../../db/storage.js";
import { getPhotoURL } from "../../db/storage.js";
import { alertProcess, alerts } from "../../lib/alerts.js";
import { loadViewHeaderUser } from "../timeline/viewHeaderUser.js";
import { addEventLinkUser } from "../timeline/eventsTimeline.js";
// import { loadViewModal } from "../timeline/viewModal.js";
// import { addEventFormPost } from "../timeline/eventsCrud.js";

const loadTimelineUser = async () => {
    const idUserProfile = window.localStorage.getItem('idUserProfile');
    const idUserAuth = localStorage.getItem('iduser'); //Esto vien de la linea 58 del archivo eventLogin OBTENER EL ID USER
    const objectPosts = [];
    console.log(idUserProfile)
    // const infouser = await getUser(iduser).then(response => response.data());
    const infoUserProfile = await getUser(idUserProfile).then(response => response.data());
    const allCategoriesCourses = JSON.parse(window.localStorage.getItem('allCategories'));
    const avatarUser = document.querySelector("#avatar-user");
    const avatarName = document.querySelector("#avatar-name");
    const coverUser = document.querySelector("#img-cover-user")
    const avatarDescription = document.querySelector("#avatar-description");
    let dataPublic;
    console.log(infoUserProfile)
    avatarUser.src = infoUserProfile.photouser;
    avatarName.textContent = infoUserProfile.nameuser;
    avatarDescription.textContent = infoUserProfile.description;
    coverUser.src = infoUserProfile.photocover;

    return getPostUser(idUserProfile).then(response => {
        response.forEach(doc => {
            const categoryprueba = allCategoriesCourses.find(element => element.idCategory == doc.data().idCategory);
            objectPosts.push({
                idPost: doc.id,
                idUser: doc.data().idUser,
                nameUser: infoUserProfile.nameuser,
                photoUser: infoUserProfile.photouser,
                contentPost: doc.data().contentPost,
                datePost: doc.data().datePost.toDate().toDateString(),
                nameImage: doc.data().nameImage,
                arrLikes: doc.data().arrLikes,
                publicPosts: doc.data().publicPosts,
                arrComments: doc.data().arrComments,
                image: doc.data().image,
                idCategory: doc.data().idCategory,
                nameCategory: categoryprueba.nameCategory,
                urlImage: doc.data().urlImage
            })
            dataPublic = objectPosts.filter(element => element.publicPosts == 'true' || element.idUser == idUserAuth);

        })
        loadViewPost(dataPublic);
    });
};

const showButtonsProfile = () => {
    const url = window.location.href;
    const path = url.split('#');

    if (path[1] == '/profile') {
        const idUserAuth = localStorage.getItem('iduser'); //Esto vien de la linea 58 del archivo eventLogin OBTENER EL ID USER
        const idUserProfile = window.localStorage.getItem('idUserProfile');
        const btnCrear = document.querySelector("#btn-crear")
        const btnEditarPerfil = document.querySelector("#btn-editarPerfil")
        document.querySelector('#div-body').className = "bodyBackground";

        if (idUserAuth === idUserProfile) {
            btnCrear.style.display = "block";
            btnEditarPerfil.style.display = "block";
        } else {
            btnCrear.style.display = "none";
            btnEditarPerfil.style.display = "none";
        }
        openModal();
    }
}

const openModal = () => {
    const modal = document.querySelector('.modal-edit-profile');
    const btnEditProfile = document.querySelector('#btn-editarPerfil');
    const btnCloseModal = document.querySelector('.modal-edit-profile .btn-cerrar-modal');
    
    btnEditProfile.addEventListener('click', () => { //Evento que Abre modal
        modal.classList.add('revelar')
        addEventsModalEdit()
    })

    btnCloseModal.addEventListener('click', () => { //evento para cerrar el modal
        modal.classList.remove('revelar')
        document.querySelector('#form-edit-profile').reset();
    });
}

const addEventsModalEdit = () => {
    const infouser = JSON.parse(window.localStorage.getItem('infouser'));
    const previewImgUser = document.querySelector('#preview-edit-photoUser')
    const previewImgCover = document.querySelector('#preview-edit-photoCover')
    const titleModal = document.querySelector('.modal-edit-profile #title-modal');
    const inputImgUser = document.querySelector('#input-file-photoUser');
    const inputImgCover = document.querySelector('#input-file-photoCover');
    const inputNameUser = document.querySelector('#name-edit');
    const inputEmailUser = document.querySelector('#email-edit');
    const inputDescriptionUser = document.querySelector('#textarea-description');
    const formEditProfile = document.querySelector('#form-edit-profile');
    // const inputNewPasswordUser = document.querySelector('#new-password');
    // const inputConfirmPasswordUser = document.querySelector('#change-password');

    //Llenar datos previos en el formulario
    let changePhotoUser = false;
    let changePhotoCover = false;
    titleModal.innerText = 'Editar Perfil';
    previewImgUser.src = infouser.photouser;
    previewImgCover.src = infouser.photocover;
    inputNameUser.value = infouser.nameuser;
    inputEmailUser.value = infouser.email;
    inputDescriptionUser.value = infouser.description;
    let filenameUser, filenameCover, filearrayUser, filearrayCover;

    inputImgUser.addEventListener('change', async (e) => {//Evento a los input file imagen de usuario
        changePhotoUser = true;
        filenameUser = e.target.files[0].name;    
        filearrayUser = e.target.files[0];
        previewImageEdit(filearrayUser, previewImgUser, infouser);
    })

    inputImgCover.addEventListener('change', (e) => {//Evento a los input file portada de usuario
        changePhotoCover = true;
        filenameCover = e.target.files[0].name;    
        filearrayCover = e.target.files[0];
        previewImageEdit(filearrayCover, previewImgCover, infouser);
    })

    formEditProfile.addEventListener('submit', async e => { //Evento para leer los nuevos datos del formulario
        e.preventDefault();
        alertProcess(true);
        const objectUpdatedUser = {
            nameuser: inputNameUser.value,
            description: inputDescriptionUser.value,
        };

        if(changePhotoUser === true) {
            const urlPhotoUser = await valueImage(filearrayUser, filenameUser, 'user')
            const avatarUser = document.querySelector("#avatar-user");
            avatarUser.src = urlPhotoUser;
            objectUpdatedUser.photouser = urlPhotoUser;
        }

        if(changePhotoCover === true) {
            const urlPhotoCover = await valueImage(filearrayCover, filenameCover, 'cover');
            const coverUser = document.querySelector("#img-cover-user")
            coverUser.src = urlPhotoCover;
            objectUpdatedUser.photocover = urlPhotoCover;

        }
        const idUserAuth = localStorage.getItem('iduser'); //Esto viene de la linea 58 del archivo eventLogin OBTENER EL ID USER
        updateProfileUser(idUserAuth, objectUpdatedUser).then( async () => {
            alertProcess(false)
            const avatarName = document.querySelector("#avatar-name");
            const avatarDescription = document.querySelector("#avatar-description");
            const modal = document.querySelector('.modal-edit-profile');
            const allImgUserPost = document.querySelectorAll('#container-posts-user .link-user img');
            const allNameUserPosts = document.querySelector('#container-posts-user .post-author .author-name');
            avatarName.textContent = objectUpdatedUser.nameuser;
            avatarDescription.textContent = objectUpdatedUser.description;
            changePhotoUser = false;
            changePhotoCover = false;
            allImgUserPost.forEach(element => { //renderizamos todas las imagenes del usuario nuevas despues de actualizar
                element.src = objectUpdatedUser.photouser;
            })
            allNameUserPosts.forEach(element => { //renderizamos el nuev nombre del usuario despues de actualizar
                element.textContent = objectUpdatedUser.nameuser;
            })
            await loadViewHeaderUser();
            formEditProfile.reset();
            modal.classList.remove('revelar');
            alerts('success', 'Editado con éxito');
        }).catch((error) => {
            alertProcess(false);
            alerts('error', error);
        })
    })
}

const previewImageEdit = (filearray, imgElement, infouser) => {
    const reader = new FileReader();
    reader.onloadend = () => imgElement.src = reader.result;  //evento se activa cuando la lectura se ha completado
    (filearray) ? reader.readAsDataURL(filearray) : imgElement.src = infouser.photoUser;
}

const valueImage = async (filearray, filename, typeImage) => {
    let urlImage, path;
    (typeImage === 'user') ? path = 'users' : path = 'covers';
    urlImage = await saveImageFile(filename, filearray, path)
    .then(() => getPhotoURL(filename, path))
    .then((imageURL) => {
        return imageURL;
    });
    return urlImage;
}

const showTopTenUsers = async () => {
    const idUserAuth = localStorage.getItem('iduser'); //Esto vien de la linea 58 del archivo eventLogin OBTENER EL ID USER
    const containerTopTenUsers = document.querySelector('#container-friends');
    await getTopTenUsers().then(response => response.forEach(doc => {
        if (doc.id != idUserAuth) {
            const sectionUser = document.createElement('section');
            sectionUser.className = 'info-friends';
            sectionUser.innerHTML = `
                <img src="${doc.data().photouser}" alt="" class="avatar avatar-sm">
                <p class="link-user" data-id="${doc.id}"> ${doc.data().nameuser} </p>
            `
            containerTopTenUsers.appendChild(sectionUser);  
        }
    }))
    addEventLinkUser();
}

export { loadTimelineUser, showButtonsProfile, showTopTenUsers }