const savePosts = (post) =>
  firebase.firestore().collection("posts").doc().set({ post });
const onGetPosts = (callback) =>
  firebase.firestore().collection("posts").onSnapshot(callback);
const deletePosts = (id) =>
  firebase.firestore().collection("posts").doc(id).delete();
const updatePost = (id, updatedPost) =>
  firebase.firestore().collection("posts").doc(id).update(updatedPost);

export { savePosts, onGetPosts, deletePosts, updatePost };
