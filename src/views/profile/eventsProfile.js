import { getPostUser} from "../../db/firestore.js";
import { loadViewPost } from "../timeline/viewPosts.js";
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
                publicPosts : doc.data().publicPosts,
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
    const path = url.split('#')

    if (path[1] == '/profile') {
        console.log('si es')
        const idUserAuth = localStorage.getItem('iduser'); //Esto vien de la linea 58 del archivo eventLogin OBTENER EL ID USER
        const idUserProfile = window.localStorage.getItem('idUserProfile');
        const btnSeguir = document.querySelector("#btn-seguir")
        const btnCrear = document.querySelector("#btn-crear")
        const btnEditarPerfil = document.querySelector("#btn-editarPerfil")
        console.log(idUserAuth, idUserProfile, 'aqui 54')
        if(idUserAuth === idUserProfile) {
            btnSeguir.style.display = "none";
            btnCrear.style.display = "block";
            btnEditarPerfil.style.display = "block";
            console.log('btncrear')
        } else {
            btnCrear.style.display = "none";
            btnEditarPerfil.style.display = "none";
            console.log('btnseguir')
        }
        
    } else {
        console.log('no entre')
    }
}

export { loadTimelineUser, addEventsProfileUser }