import { getAllUsers, getUser } from '../../db/firestore.js';
import { alerts } from '../../lib/alerts.js';
//Extraemos todos los usuarios, para luego filtrar nuestro usuario autenticado
const getinfousers = () => {
    const objectUsers = [];
    return getAllUsers()
        .then(response => {
            response.forEach(doc => {
                objectUsers.push({
                    idUser: doc.id,
                    nameUser: doc.data().nameuser,
                    email: doc.data().email,
                    photoUser: doc.data().photouser,
                    photoCover: doc.data().photocover,
                    description: doc.data().description
                });
            })
            window.localStorage.setItem('allUsers', JSON.stringify(objectUsers)); //Almacenamos en Local Todos los Usuarios, para usarlos luego en post
            return objectUsers;
        }).catch(error => alerts('error', 'Error en obtener Users: ' + error.code));
}

const loadViewHeaderUser = async() => {
    getinfousers()
    const iduser = localStorage.getItem('iduser'); //extraemos el iduser auth almacenado en local login linea 60
    const infouser = await getUser(iduser).then(response => response.data());
    window.localStorage.setItem('infouser', JSON.stringify(infouser)); //guardamos toda la info del usuario Auth para modal-text area
    const userInfoHtml = document.querySelector('#user-info'); //id del sectiuon dentro del header
    const photo = infouser.photouser;
    const valid = /^(http|https):\/\/[^ "]+$/.test(photo);
    const srcPhotouser = (valid) ? photo : '../../images/profile/' + photo; //si es true la foto es url 
    userInfoHtml.innerHTML = `<span class="user-information">  
                                    <span class="link-user" data-id="${iduser}" id="avatar-name-header"> Mi perfil </span> 
                                    <img class="avatar avatar-sm" src="${srcPhotouser}" id="avatar-photouser-header" alt="img-user"> 
                                </span>`
        // loadUserPosts()<span class="link-user" data-id="${element.idUser}">
}

export { loadViewHeaderUser, getinfousers }