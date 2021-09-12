/* eslint-disable no-undef */
const addEventRegisterUserFacebook = () => {
    const btnFacebook = document.querySelector('#facebook');
    btnFacebook.addEventListener('click', (e) => {
        e.preventDefault();

        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const credential = result.credential;
                // This gives you a Google Access Token. You can use it to access the Google API.
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const avatar = result.user.photoURL;
                console.log(token, user, avatar)
                alerts('success', 'Bienvenido') //mostramos alerta de exito
                window.location.href = "#/timeline";
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                alerts('error', errorMessage) //mostramos alerta de error 
            });
    })
}

export { addEventRegisterUserFacebook };