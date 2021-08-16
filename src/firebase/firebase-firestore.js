import firebase from './firebase.js';
// METODO QUE DETECTA LA AUTENTICACION DEL USUARIO - PENDIENTE
export const firebaseWatcher = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('el usuario esta logueado');
      console.log(uid);
      // if (user.photoURL) {
      //   $('#avatar').attr('src', user.photoURL)
      // } else {
      //   $('#avatar').attr('src', 'images/photoProfile2.jpeg')
      // }
    } else {
      // User is signed out
      console.log('al usuario le falta loguearse');
    }
  });
};

// METODO PARA CREAR UNA COLECCION EN FIRESTORE
export const addPostCollection = (nameUser, postMessage) => {
  firebase.firestore().collection('publicaciones').doc('user').set({
    dateExample: firebase.firestore.Timestamp.fromDate(new Date()),
    name: nameUser,
    post: postMessage,
    likePost: 0,
  }, { merge: true })
    .then(() => {
      console.log('Document successfully written!');
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
};

// PRUEBA - PARA CREAR USUARIO
export const addNewUser = () => {
  firebase.firestore().collection('users').add({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
