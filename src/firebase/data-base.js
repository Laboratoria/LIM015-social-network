export const createUser = (nombre, email, id, photo) => {
  const addUserCollection = firebase.firestore().collection('username').doc(id).set({
    Usuario: nombre,
    Correo: email,
    Id: id,
    Photo: photo,
  });
  return addUserCollection;
};

export const sharePost = (post, email, nombre) => firebase.firestore().collection('posts').add({
  post,
  email,
  nombre,

});
