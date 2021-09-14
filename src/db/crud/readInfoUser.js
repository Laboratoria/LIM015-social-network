import { alerts } from '../../alerts/alerts.js';
const readInfoUser = () => {
    const iduser = localStorage.getItem('iduser'); //extraemos lo que almacenamos en local
    // eslint-disable-next-line no-undef
    const db = firebase.firestore();
    const userInfo = document.querySelector('#user-info')
    db.collection("users").doc(iduser)
        .get()
        .then((doc) => {
            console.log("Document data:", doc.data());
            const regexUrl = /\(((?:\/|https?:\/\/).*)\)/gi;
            const url = doc.data().photouser.match(regexUrl);
            const srcPhotouser = (url != null) ? 'user.jpg' : doc.data().photouser;
            userInfo.innerHTML = `<a href="#/profile" id="logout" class="user-information">  <span> ${doc.data().nameuser} </span> <img class="avatar avatar-sm" src="${srcPhotouser}" alt="img-user"> </a>`
        }).catch(function(error) {
            alerts('error', 'Error getting document ' + error.code) //mostramos alerta de error 
        });
}

export { readInfoUser }