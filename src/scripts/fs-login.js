import { auth } from './fs-config.js';

export const signUp = (email, password) => {
  // const userName = document.getElementById('signup-user').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log('signed up');
      console.log(userCredential);
      // ...
    })
    .catch((error) => {
      alert('La contraseña debe tener mínimo 6 caracteres \n 〜(꒪꒳꒪)〜');
      console.log(error.code, error.message);
    });
};

// SING IN
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
      alert('Contraseña o Email incorrecto \n (╯ರ ~ ರ)╯︵ ┻━┻');
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
      // The signed-in user info.
      console.log(result.user);
      console.log('signed in with Google');
      // ...
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


