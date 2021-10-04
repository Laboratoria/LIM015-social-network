/* eslint-disable no-console */
/* eslint-disable max-len */
export const emailVerication = () => firebase.auth().currentUser.sendEmailVerification();

export const registerWithEmail = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export async function login() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  try {
    const response = await firebase.auth().signInWithPopup(googleProvider);
    console.log(response);
    return response.user;
  } catch (error) {
    throw new Error(error);
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

export const logInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

/* export const registerWithEmail = (email, password) => firebase.auth()
   .createUserWithEmailAndPassword(email, password); */

export const publishPost = (objPublicacion) => firebase
  .firestore()
  .collection('post')
  .add(objPublicacion)
  .then((docRef) => {
    console.log('Documento escrito con el ID: ', docRef.id);
    // resolver('documeto registrado');
  })
  .catch((error) => {
    console.log(error);
    //  rechazar('documeto no registrado');
  });
