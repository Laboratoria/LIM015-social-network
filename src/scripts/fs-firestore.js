const db = firebase.firestore();

// Función para enviar los posts a firebase
export const savePost = (post, name, email, photo) => db.collection('posts').doc().set({
  post: post.value,
  name, // es la abreviación de "name: name"
  email,
  photo,
});

// Función para traer los posts de firebase
export const getAllPosts = () => db.collection('posts');

// Función para borrar los posts de firebase
export const deletePost = (id) => db.collection('posts').doc(id).delete();

// Función para traer un post
export const getPost = (id) => db.collection('posts').doc(id).get();
