export const postCollection = (post, userName, photo) => firebase.firestore().collection('posts').add({
  user: userName,
  text: post,
  photo,
  timePost: firebase.firestore.FieldValue.serverTimestamp(),
});

// export const userCollection = (user, photo, email) => firebase.firestore().collection('users').add({
//   user,
//   photo,
//   email,
// });

// Falta agregar el tiempo descendente
export const getCollection = () => firebase.firestore().collection('posts').orderBy('timePost', 'desc');
// export const getUserCollection = () => firebase.firestore().collection('users');
