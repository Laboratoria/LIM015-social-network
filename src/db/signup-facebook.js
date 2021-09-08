/* eslint-disable no-undef */
const addEventRegisterUserFacebook = (formRegistro) => {
    const btnFacebook = formRegistro.querySelector('#facebook');
    console.log(btnFacebook);
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
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential;
          console.log(errorCode, email, errorMessage, credential)
          // ...
        });
    })
}

export { addEventRegisterUserFacebook };