import firebase from './firebase.js';

// METODO PARA AGREGAR UNA COLECCION DE POSTS EN FIRESTORE
export const addPostCollection = (nameUser, mailCurrentUser, postMessage) => {
  firebase.firestore().collection('posts').add({
    author: nameUser,
    mail: mailCurrentUser,
    post: postMessage,
    time: firebase.firestore.Timestamp.fromDate(new Date()),
    privacyUserPost: false,
    likes: 0,
  })
    .then((docRef) => {
      console.log('POST EN FIRESTORE');
      console.log(docRef);
      console.log(docRef.id);
      console.log(docRef.path);
      return docRef;
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
};

// METODO PARA OBTENER TODOS LOS POSTS EN ORDEN DESCENDENTE
export const getPosts = (element) => {
  firebase.firestore().collection('posts').orderBy('time', 'desc').get()
    .then((docRef) => {
      console.log(docRef);
      docRef.forEach((doc) => {
        console.log(doc.data());
        element.innerHTML += `<div class='postMessage'>
          <div>
            <p>Publicado por<span id='userNamePost'></span></p>
            <button class='btnDelete'><i class="fas fa-times-circle"></i></button>
          </div>
          <div id='postContent'>${doc.data().post}</div>
          <div id='reactionPost'>
            <button class='btnLike'><i class="fas fa-heart"></i></button>
            <button class='btnEdit'><i class="fas fa-edit"></i></button>
          </div>
        </div>`;
      });
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
};

// METODO PARA OBTENER TODOS LOS POSTS ACTUALIZADOS
export const onGetPosts = (callback) => {
  firebase.firestore().collection('posts').onSnapshot(callback);
};

// METODO PARA OBTENER EL ID
export const getPostId = (id) => {
  firebase.firestore().collection('posts').doc(id).get()
    .then((docRef) => {
      console.log(docRef.id);
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
};
