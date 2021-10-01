import { getPostUser, updateProfileUser } from "../../db/firestore.js";
import { loadViewPost } from "../timeline/viewPosts.js";
import { saveImageFile } from "../../db/storage.js";
import { getPhotoURL } from "../../db/storage.js";
const infouser = JSON.parse(window.localStorage.getItem('infouser'));
console.log(infouser)

const loadTimelineUser = () => {
    const idUserAuth = localStorage.getItem('iduser'); //Esto vien de la linea 58 del archivo eventLogin OBTENER EL ID USER
    const objectPosts = [];
    const idUserProfile = window.localStorage.getItem('idUserProfile');
    const allUsers = JSON.parse(window.localStorage.getItem('allUsers')); //extraemos de local viewHeaderUser Linea 21
    const infoUserProfile = allUsers.find(element => element.idUser === idUserProfile);
    const allCategoriesCourses = JSON.parse(window.localStorage.getItem('allCategories'));
    const containerPostsUser = document.querySelector('#container-posts-user');
    const avatarUser = document.querySelector("#avatar-user");
    const avatarName = document.querySelector("#avatar-name");
    const coverUser = document.querySelector("#img-cover-user")
    const avatarDescription = document.querySelector("#avatar-description");
    let dataPublic;
    avatarUser.src = infoUserProfile.photoUser;
    avatarName.textContent = infoUserProfile.nameUser;
    avatarDescription.textContent = infoUserProfile.description;
    coverUser.src = infoUserProfile.photoCover;

    return getPostUser(idUserProfile).then(response => {
        response.forEach(doc => {
            const categoryprueba = allCategoriesCourses.find(element => element.idCategory == doc.data().idCategory);
            objectPosts.push({
                idPost: doc.id,
                idUser: doc.data().idUser,
                nameUser: infoUserProfile.nameUser,
                photoUser: infoUserProfile.photoUser,
                contentPost: doc.data().contentPost,
                datePost: doc.data().datePost.toDate().toDateString(),
                nameImage: doc.data().nameImage,
                arrLikes: doc.data().arrLikes,
                publicPosts: doc.data().publicPosts,
                totalComments: doc.data().totalComents,
                image: doc.data().image,
                idCategory: doc.data().idCategory,
                nameCategory: categoryprueba.nameCategory,
                urlImage: doc.data().urlImage
            })
            dataPublic = objectPosts.filter(element => element.publicPosts == 'true' || element.idUser == idUserAuth);

        })
        loadViewPost(dataPublic, containerPostsUser);
    });
};

const addEventsProfileUser = () => {
    const url = window.location.href;
    const path = url.split('#');

    if (path[1] == '/profile') {
        const idUserAuth = localStorage.getItem('iduser'); //Esto vien de la linea 58 del archivo eventLogin OBTENER EL ID USER
        const idUserProfile = window.localStorage.getItem('idUserProfile');
        const btnSeguir = document.querySelector("#btn-seguir")
        const btnCrear = document.querySelector("#btn-crear")
        const btnEditarPerfil = document.querySelector("#btn-editarPerfil")

        if (idUserAuth === idUserProfile) {
            btnSeguir.style.display = "none";
            btnCrear.style.display = "block";
            btnEditarPerfil.style.display = "block";
        } else {
            btnCrear.style.display = "none";
            btnEditarPerfil.style.display = "none";
        }
    }
    openModal();
}

const openModal = () => {
    const modal = document.querySelector('.modal-edit-profile');
    const btnEditProfile = document.querySelector('#btn-editarPerfil');
    const btnCloseModal = document.querySelector('.btn-cerrar-modal');
    
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
    const previewImgUser = document.querySelector('#preview-edit-photoUser')
    const previewImgCover = document.querySelector('#preview-edit-photoCover')
    const titleModal = document.querySelector('#title-modal');
    const inputImgUser = document.querySelector('#input-file-photoUser');
    const inputImgCover = document.querySelector('#input-file-photoCover');
    const inputNameUser = document.querySelector('#name-edit');
    const inputEmailUser = document.querySelector('#email-edit');
    const inputDescriptionUser = document.querySelector('#textarea-description');
    const formEditProfile = document.querySelector('#form-edit-profile');
    // const inputNewPasswordUser = document.querySelector('#new-password');
    // const inputConfirmPasswordUser = document.querySelector('#change-password');

    //Llenar datos previos en el formulario
    let urlPhotoUser = infouser.photoUser;
    let urlPhotoCover = infouser.photoCover;
    titleModal.innerText = 'Editar Perfil';
    previewImgUser.src = infouser.photoUser;
    previewImgCover.src = infouser.photoCover;
    inputNameUser.value = infouser.nameUser;
    inputEmailUser.value = infouser.email;
    inputDescriptionUser.value = infouser.description;
   
    inputImgUser.addEventListener('change', async (e) => {//Evento a los input file imagen de usuario
        const filename = e.target.files[0].name;    
        const filearray = e.target.files[0];
        previewImageEdit(filearray, previewImgUser, infouser);
        urlPhotoUser = valueImage(filearray, filename);
    })

    inputImgCover.addEventListener('change', (e) => {//Evento a los input file portada de usuario
        const filename = e.target.files[0].name;    
        const filearray = e.target.files[0];
        previewImageEdit(filearray, previewImgCover, infouser);
        urlPhotoCover = valueImage(filearray, filename);
    })

    formEditProfile.addEventListener('submit', e => { //Evento para leer los nuevos datos del formulario
        e.preventDefault();
        const objectUpdatedUser = {
            email: inputEmailUser.value,
            nameUser: inputNameUser.value,
            description: inputDescriptionUser.value,
            photouser: urlPhotoUser,
            photocover: urlPhotoCover,
        }
        updateProfileUser(infouser.idUser, objectUpdatedUser);
    })
}

const previewImageEdit = (filearray, imgElement, infouser) => {
    const reader = new FileReader();
    reader.onloadend = () => imgElement.src = reader.result;  //evento se activa cuando la lectura se ha completado
    (filearray) ? reader.readAsDataURL(filearray) : imgElement.src = infouser.photoUser;
}

const valueImage = async (filearray, filename) => {
    let nameImage;
    if(filearray) {
        nameImage = await saveImageFile(filename, filearray)
        .then(() => getPhotoURL(filename))
        .then((imageURL) => {
            return imageURL;
        });
    } else {
        nameImage = infouser.photoUser;
    }
    console.log(nameImage)
    return nameImage;
}



export { loadTimelineUser, addEventsProfileUser }