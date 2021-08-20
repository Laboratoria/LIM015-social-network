import { auth } from './fs-config.js';

// const usuarios = firebase.firestore().collection('InfoUser');
// SIGN UP
export const signUp = (email, password) => {
  // const userName = document.getElementById('signup-user').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      console.log('signed up', result);
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
};

// SIGN IN
export const signIn = (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('signed in', user);
      // ...
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
};

// GOOGLE LOGIN
export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      const credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log(credential.accessToken);
      // Envío la información del usuario al LocalStorage
      const Name = result.user.displayName;
      const Email = result.user.email;
      const Photo = result.user.photoURL;
      const User = {
        name: Name,
        email: Email,
        photo: Photo,
      };
      localStorage.setItem('user', JSON.stringify(User));
      console.log('signed in with Google');
    })
    .catch((error) => {
      console.error('no se pudo iniciar sesión con gugul :c');
      console.log(error.code);
      console.log(error.message);
      // The email of the user's account used.
      console.log(error.email);
      // The firebase.auth.AuthCredential type that was used.
      console.log(error.credential);
      // ...
    });
};

// Log out
export const logout = () => {
  auth.signOut().then(() => {
    console.log('signed out');
    window.location.reload();
  }).catch((error) => {
    console.log(error);
  });
};
