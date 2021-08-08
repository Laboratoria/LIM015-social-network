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

export const getPost = (callback) => firebase.firestore().collection('posts').orderBy('timePost', 'desc')
  .onSnapshot((querySnapshot) => {
    const postGetPost = [];
    querySnapshot.forEach((doc) => {
      postGetPost.push({ id: doc.id, ...doc.data() });
    });
    callback(postGetPost);
  });

export const editLikes = (idD, like) => {
  firebase.firestore().collection('posts').doc(idD).update({
    likes: like,
  });
};
