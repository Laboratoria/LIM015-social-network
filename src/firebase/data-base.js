export const createUser = (nombre, email, id, photo) => {
  const addUserCollection = firebase.firestore().collection('username').doc(id).set({
    Usuario: nombre,
    Correo: email,
    Id: id,
    Photo: photo,
  });
  return addUserCollection;
};

export const sharePost = (post, email, nombre, id, like, privacy) => firebase.firestore().collection('posts').add({
  postText: post,
  idUser: id,
  user: nombre,
  mail: email,
  mode: privacy,
  likes: like,
  timePost: new Date(),
});
