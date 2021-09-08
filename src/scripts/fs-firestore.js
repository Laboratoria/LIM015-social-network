// Función para enviar los posts a firebase
export const savePost = (post, name, email, photo) => firebase.firestore().collection('posts').doc().set({
  post,
  name, // es la abreviación de "name: name"
  email,
  photo,
  time: firebase.firestore.FieldValue.serverTimestamp(),
});

// Función para traer los posts de firebase
export const getAllPosts = () => firebase.firestore().collection('posts').orderBy('time', 'desc');

// Función para borrar los posts de firebase
export const deletePost = (id) => firebase.firestore().collection('posts').doc(id).delete();

// Función para traer un post
export const getPost = (id) => firebase.firestore().collection('posts').doc(id).get();

// Función para actualizar un post
export const updatePost = (id, updatedPost) => firebase.firestore().collection('posts').doc(id).update({
  post: updatedPost,
});
