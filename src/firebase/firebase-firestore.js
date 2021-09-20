export const postCollection = (post, userName) => firebase.firestore().collection('posts').add({
  user: userName,
  text: post,
});

export const getCollection = () => firebase.firestore().collection('posts');
// Falta agregar el tiempo descendente
