import { getAllUsers } from '../../db/firestore.js';
import { alerts } from '../../lib/alerts.js';
const infouser = JSON.parse(window.localStorage.getItem('infouser')); //extraemos lo que almacenamos en local archivo viewHeaderUser line 29
const nameUserPath = infouser.nameUser.replace(/\s+/g, '');

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
    const allUsers = await getinfousers().then(response => response);
    const iduser = localStorage.getItem('iduser'); //extraemos el iduser auth almacenado en local login linea 60
    const infouser = allUsers.find(element => element.idUser === iduser);
    window.localStorage.setItem('infouser', JSON.stringify(infouser)); //guardamos toda la info del usuario Auth para modal-text area
    const userInfoHtml = document.querySelector('#user-info'); //id del sectiuon dentro del header

    const photo = infouser.photoUser;
    const valid = /^(http|https):\/\/[^ "]+$/.test(photo);
    const srcPhotouser = (valid) ? photo : '../../images/profile/' + photo; //si es true la foto es url 
    userInfoHtml.innerHTML = `<a href="#/profile${nameUserPath}" id="logout" class="user-information">  <span> ${infouser.nameUser} </span> <img class="avatar avatar-sm" src="${srcPhotouser}" alt="img-user"> </a>`

}

export { loadViewHeaderUser, nameUserPath }