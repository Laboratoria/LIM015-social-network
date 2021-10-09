/* eslint-disable no-console */
/* eslint-disable max-len */
export const emailVerication = () => firebase.auth().currentUser.sendEmailVerification();

export const registerWithEmail = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export async function login() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  try {
    const response = await firebase.auth().signInWithPopup(googleProvider);
    return response.user;
  } catch (error) {
    console.log(error);
    return `error al iniciar sesión  ${error}`;
  }
}

// funcion para cerrar sesion
export function logout() {
  firebase.auth().signOut();
}

export const logInWithEmail = (email, password) => {
  const loginn = firebase.auth().signInWithEmailAndPassword(email, password);
  return loginn;
};

// ------seccion mainpage-------//
// -----Envia valores de los inputs a Firebase ---- //
export const publishPost = (objPublicacion) => new Promise((resolver, rechazar) => {
  firebase.firestore().collection('posts').add(objPublicacion)
    .then((docRef) => {
      console.log('Documento escrito con el ID: ', docRef.id);
      resolver('documeto registrado');
    })
    .catch((error) => {
      console.log(error);
      rechazar('documeto no registrado');
    });
});
