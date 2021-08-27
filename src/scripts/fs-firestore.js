const db = firebase.firestore();

// Función para enviar los posts a firebase
export const savePost = (post) => db.collection('posts').doc().set({
  Post: post.value,
});

// Función para traer los posts de firebase
export const getPost = () => db.collection('posts');
