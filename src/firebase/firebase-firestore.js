export const postCollection = (post, userName, photo) => firebase.firestore().collection('posts').add({
  user: userName,
  text: post,
  photo,
  timePost: firebase.firestore.FieldValue.serverTimestamp(),
});

export const getCollection = () => firebase.firestore().collection('posts').orderBy('timePost', 'desc');

// Falta agregar el tiempo descendente
