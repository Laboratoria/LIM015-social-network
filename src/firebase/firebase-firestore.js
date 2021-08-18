import firebase from './firebase.js';

// METODO PARA OBTENER UN POST ESPECIFICO
export const getPost = (id) => firebase.firestore().collection('publicaciones').doc(id).get();

// PRUEBA - PARA CREAR USUARIO - ERROR
export const addNewUser = (nameUser, mailUser) => {
  firebase.firestore().collection('users').add({
    name: nameUser,
    mail: mailUser,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// METODO PARA AGREGAR UNA COLECCION DE POSTS EN FIRESTORE
export const addPostCollection = (nameUser, mailUser, postMessage) => {
  firebase.firestore().collection('publicaciones').add({
    name: nameUser,
    mail: mailUser,
    post: postMessage,
  })
    .then((docRef) => {
      console.log(docRef);
      console.log(docRef.id);
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
};

// METODO PARA SUBIR UN POST A FIRESTORE
export const savePost = (post, FieldValue, name, photoURL, email,
  uid, privacyUserPost, datePost, hearts) => {
  firebase.firestore().collection('publicaciones').doc().set({
    post,
    timestamp: FieldValue.serverTimestamp(), // tiempo de creación del post en nanosegundos
    name,
    photoURL,
    email,
    uid,
    privacyUserPost,
    datePost,
    hearts,
  });
};

// METODO PARA CONSULTAR TODA LA COLECCION DE POSTS EN FIRESTORE
export const showPost = () => {
  firebase.firestore().collection('publicaciones')
    .onSnapshot((snapshot) => {
      const documentos = [];
      snapshot.forEach((snapHijo) => {
        documentos.push({
          id: snapHijo.id,
          ...snapHijo.data(),
        });
      });
      console.log(documentos.id);
    });
};

// METODO PARA ACTUALIZAR UNA PUBLICACION EN FIRESTORE
export const updatePost = (id, elementContent) => {
  firebase.firestore().collection('publicaciones').doc(id)
    .update(elementContent);
};

// METODO PARA BORRAR UNA PUBLICACION EN FIRESTORE
export const deletePost = (id) => {
  firebase.firestore().collection('publicaciones').doc(id)
    .delete()
    .then(() => console.log('borrado'))
    .catch((error) => console.log(error));
};

// METODO PARA ACTUALIZAR LA PRIVACIDAD EN FIRESTORE
export const updatePrivacy = (id, privacyUserPost) => {
  firebase.firestore().collection('publicaciones').doc(id).update(privacyUserPost);
};

// METODO PARA ACTUALIZAR LA PRIVACIDAD EN FIRESTORE
export const updateLikes = (id, hearts) => {
  firebase.firestore().collection('publicaciones').doc(id).update(hearts);
};
