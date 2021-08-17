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

// METODO PARA AGREGAR UNA COLECCION DE POSTS EN FIRESTORE
export const addPostCollection = (user, postContent) => {
  firebase.firestore().collection('publicaciones').add(user)
    .then((docRef) => {
      console.log(docRef);
      console.log(firebase.auth().currentUser);
      console.log(user);
      postContent.innerHTML += `<div class='postMessage'>
      <div>
        <p>Publicado por<span id='userNamePost'></span></p>
        <span id='closeItem'><i class="fas fa-times-circle"></i></span>
      </div>
      <div id='postContent'>${user.post}</div>
      <div id='reactionPost'>
        <span><i class="fas fa-heart"></i></span>
        <span><i class="fas fa-share-square"></i></span>
      </div>
    </div>`;
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
};

// METODO PARA ACTUALIZAR UNA PUBLICACION EN FIRESTORE
export const updatePost = (element) => {
  firebase.firestore().collection('publicaciones').doc('user')
    .update({
      post: element.value,
  });
};

// METODO PARA BORRAR UNA PUBLICACION EN FIRESTORE
export const deletePost = () => {
  firebase.firestore().collection('publicaciones').doc('user')
    .delete()
    .then(() => console.log('borrado'))
    .catch((error) => console.log(error));
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
