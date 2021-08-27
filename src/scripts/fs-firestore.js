const db = firebase.firestore();

// Función para enviar los posts a firebase
export const savePost = (post, name, email, photo) => db.collection('posts').doc().set({
  post: post.value,
  name, // es la abreviación de "name: name"
  email,
  photo,
});

// Función para traer los posts de firebase
export const getPost = () => db.collection('posts');
