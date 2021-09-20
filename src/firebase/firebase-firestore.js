export const postCollection = (post, userName, photo) => firebase.firestore().collection('posts').add({
  user: userName,
  text: post,
  photo,
});

export const getCollection = () => firebase.firestore().collection('posts');
// Falta agregar el tiempo descendente
