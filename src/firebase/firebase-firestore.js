// Creando la colección de posts
export const postCollection = (post, userName, photo) => firebase.firestore().collection('posts').add({
  user: userName,
  text: post,
  photo,
  timePost: firebase.firestore.FieldValue.serverTimestamp(),
});
// Obteniendo la colección de posts
export const getCollection = () => firebase.firestore().collection('posts').orderBy('timePost', 'desc');

// Creando la colección de usuarios
export const postUserCollection = (usuario, email) => firebase.firestore().collection('user').add({
  usuario,
  email,
});
// Obteniendo la colección de usuarios
export const getUserCollection = () => firebase.firestore().collection('user');

// Eliminar posts
export const deletePost = (id) => firebase.firestore().collection('posts').doc(id).delete();
