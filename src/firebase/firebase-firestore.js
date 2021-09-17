export const postCollection = (post) => firebase.firestore().collection('posts').add({
  text: post,
});

export const getCollection = () => firebase.firestore().collection('posts');
// Falta agregar el tiempo descendente
