import firebase from './firebase.js';

// METODO PARA AGREGAR UNA COLECCION DE POSTS EN FIRESTORE
export const addPostCollection = (nameUser, mailCurrentUser, postMessage) => {
  const postCollection = firebase.firestore().collection('posts').add({
    author: nameUser,
    mail: mailCurrentUser,
    post: postMessage,
    time: firebase.firestore.Timestamp.fromDate(new Date()),
    privacyUserPost: false,
    likes: 0,
  });
  return postCollection;
};

// METODO PARA OBTENER TODOS LOS POSTS EN ORDEN DESCENDENTE (consulta en firestore)
export const getPosts = () => {
  const postOnFirestore = firebase.firestore().collection('posts').orderBy('time', 'desc').get();
  return postOnFirestore;
};

// METODO PARA OBTENER TODOS LOS POSTS ACTUALIZADOS (snapshot)
export const onGetPosts = (callback) => {
  const getPostOnFirestore = firebase.firestore().collection('posts').onSnapshot(callback);
  return getPostOnFirestore;
};

// METODO PARA BORRAR UNA PUBLICACION EN FIRESTORE
export const deletePost = (id) => {
  const deletePostOnFirestore = firebase.firestore().collection('posts').doc(id).delete();
  return deletePostOnFirestore;
};

// METODO PARA ACTUALIZAR UNA PUBLICACION EN FIRESTORE
export const updatePost = (id, change) => {
  const updatePostById = firebase.firestore().collection('posts').doc(id)
    .update(
      { post: change },
    );
  return updatePostById;
};
