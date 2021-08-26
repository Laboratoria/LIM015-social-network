const db = firebase.firestore();

export const savePost = (post) => db.collection('posts').doc().set({
  Post: post.value,
});

// const getPost = () => db.collection('posts').doc().get();
