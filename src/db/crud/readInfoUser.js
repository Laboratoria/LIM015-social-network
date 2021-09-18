import { alerts } from '../../alerts/alerts.js';
const readInfoUser = () => {
    const iduser = localStorage.getItem('iduser'); //extraemos lo que almacenamos en local
    // eslint-disable-next-line no-undef
    const db = firebase.firestore();
    const userInfo = document.querySelector('#user-info');
    const userPost = document.querySelector('.user-info-textarea');
    const placeholderTextarea = document.querySelector('.textarea-post');
    db.collection("users").doc(iduser)
        .get()
        .then((doc) => {
            console.log("Document data:", doc.data());
            const photo = doc.data().photouser;
            const valid = /^(http|https):\/\/[^ "]+$/.test(photo);
            const srcPhotouser = (valid) ? doc.data().photouser : '../../images/profile/' + doc.data().photouser;
            userInfo.innerHTML = `
            <a href="#/profile" id="logout" class="user-information">  
                <span> ${doc.data().nameuser} </span> 
                <img class="avatar avatar-sm" src="${srcPhotouser}" alt="img-user"> 
            </a>`
            userPost.innerHTML = `
            <a href="#/profile" class="user-information">  
                <img class="avatar avatar-sm" src="${srcPhotouser}" alt="img-user"> 
                <span> ${doc.data().nameuser} </span> 
            </a>`
            placeholderTextarea.placeholder = `¿Qué quieres compartir hoy, ${doc.data().nameuser}... ?`
        }).catch(function(error) {
            alerts('error', 'Error getting document ' + error.code) //mostramos alerta de error 
        });
}

export { readInfoUser }