import { sharePost } from '../firebase/data-base.js';
import { currentUser } from '../firebase/autenticacion.js';

export const addPost = (e) => {
  e.preventDefault();
  const post = document.getElementById('textPost').value;
  const privacy = document.getElementById('choosePrivacy').value;
  const user = currentUser();
  // eslint-disable-next-line prefer-const
  let countLike = 0;
  if (post !== '') {
    sharePost(post, user.email, user.displayName, user.uid, countLike, privacy)
      .then(() => {
        document.getElementById('textPost').value = '';
        console.log('se agrego el post');
      }).catch((error) => {
        console.log('Su post no se pudo agregar', error);
      });
  } else {
    alert('Ingrese su post');
  }
};

// export const editLikes = (idD, like) => {
//   firebase.firestore().collection('posts').doc(idD).update({
//     likes: like,
//   });
// };

// export const getAllLikes = (postText, callback) =>{
//   firebase.firestore().collection('posts').doc(postText).collection('likes')
//     .onSnapshot((querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() });
//       });
//       callback(data);
//     });
// };

// export const deleteLike = (user, post) =>
// firebase.firestore().collection('posts').doc(post).collection('likes')
//   .doc(user)
//   .delete();

// eliminar post
export const deletePost = (idDocPost) => firebase.firestore().collection('posts').doc(idDocPost).delete();
