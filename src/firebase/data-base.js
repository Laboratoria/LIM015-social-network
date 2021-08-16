// quite el like de esta coleccion
export const sharePost = (post, email, nombre, id, privacy, photo) => firebase.firestore().collection('posts').add({
  postText: post,
  idUser: id,
  user: nombre,
  mail: email,
  mode: privacy,
  Photo: photo,
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

// eliminar post
export const editPost = (idDocPost, newText) => firebase.firestore().collection('posts').doc(idDocPost).update({
  postText: newText,
  timePost: new Date(),
});

export const deletePost = (idDocPost) => firebase.firestore().collection('posts').doc(idDocPost).delete();

// creando los likes
export const addLikeDb = (iduser, idPost, email) => firebase.firestore().collection('posts').doc(idPost).collection('likes')
  .doc(iduser)
  .set({
    iduser,
    idPost,
    email,
  });

export const deleteLikeDb = (iduser, idPost) => firebase.firestore().collection('posts').doc(idPost).collection('likes')
  .doc(iduser)
  .delete();

export const getLike = (idPost, contadorLikes, likesPintadosPost) => {
  firebase.firestore().collection('posts').doc(idPost).collection('likes')
    .onSnapshot((querySnapshot) => {
      const likes = [];
      querySnapshot.forEach((doc) => {
        likes.push({ id: doc.id, ...doc.data() });
      });
      contadorLikes(likes);
      likesPintadosPost(likes);
    });
};

// export const comment = (id, nombre, idD, text) =>
// firebase.firestore().collection('posts').doc(idD).collection('comment')
//   .add({
//     postId: idD,
//     idUser: id,
//     user: nombre,
//     comment: text,
//     timePost: new Date(),
//   });

// export const getComment = (postId, callback) => {
//   firebase.firestore().collection('posts').doc(postId).collection('comment')
//     .orderBy('timePost', 'desc')
//     .onSnapshot((querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() });
//       });
//       callback(data);
//     });
// };
