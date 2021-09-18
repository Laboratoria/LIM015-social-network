// Send post to firestore

const savePost = (username, userPost, date, userId, userPhoto, likes) =>
  firebase.firestore().collection("newPosts").doc().set({ 
    username,
    userPost,
    date,
    userId,
    userPhoto,
    likes,
    });

// Get Posts from Firestore to HTML on RealTime
  const onGetPosts = (callback) =>
  firebase.firestore().collection("newPosts").orderBy('date', 'desc').onSnapshot(callback);
// Delete published posts 

const deletePosts = (id) =>
  firebase.firestore().collection("newPosts").doc(id).delete();

const updatePost = (id, updatedPost) =>
  firebase.firestore().collection("newPosts").doc(id).update(updatedPost);

export { savePost, onGetPosts, deletePosts, updatePost };
