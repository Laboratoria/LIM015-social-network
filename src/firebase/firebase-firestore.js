export const postCollection = (post) => firebase.firestore().collection('posts').add({
  text: post,
});

export const getCollection = () => firebase.firestore().collection('posts');
