// 1. Instalar 'npm install --save-dev mock-cloud-firestore'
// 2. Anular la variable global firebase
// 3. Importar la dependencia por defecto desde node_modules file 'mock-cloud-firestore'
// 4. Crear una constante que sea nuestro simulador de firebase y reemplazarlo a nivel global
// documentación: https://www.npmjs.com/package/mock-cloud-firestore
import MockFirebase from 'mock-cloud-firestore';
import {
  addPostCollection,
  getPosts,
  onGetPosts,
  deletePost,
  updatePost,
  updateLoves,
  getPostsUserId,
} from '../src/firebase/firebase-firestore.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        a1b2c3: {
          author: 'Rosa',
          id: 'user1',
          likes: [],
          mail: 'rosita@gmail.com',
          post: 'hello!',
          privacyUserPost: false,
          time: '29 de agosto de 2021, 16:50:02 UTC-5',
        },
        a2b2c3: {
          author: 'Maria',
          id: 'user2',
          likes: [{
            userEmail: 'rosita@gmail.com',
            userID: 'user1',
          }],
          mail: 'rm@gmail.com',
          post: 'Hola!!',
          privacyUserPost: false,
          time: '28 de agosto de 2021, 16:43:02 UTC-5',
        },
        a3b2c3: {
          author: 'Lupe',
          id: 'user3',
          likes: [{
            userEmail: 'rosita@gmail.com',
            userID: 'user1',
          }, {
            userEmail: 'rm@gmail.com',
            userID: 'user2',
          }, {
            userEmail: 'lupita@gmail.com',
            userID: 'user3',
          }],
          mail: 'lupita@gmail.com',
          post: 'Quiero compartir algo',
          privacyUserPost: false,
          time: '29 de agosto de 2021, 16:43:02 UTC-5',
        },
        a3b3c3: {
          author: 'Juana',
          id: 'user4',
          likes: [{
            userEmail: 'rosita@gmail.com',
            userID: 'user1',
          }, {
            userEmail: 'rm@gmail.com',
            userID: 'user2',
          }, {
            userEmail: 'lupita@gmail.com',
            userID: 'user3',
          }],
          mail: 'juanitalahuerfanita@gmail.com',
          post: 'como estan?',
          privacyUserPost: false,
          time: '01 de agosto de 2021, 12:43:02 UTC-5',
        },
      },
    },
  },
};

// se coloca 'isNaiveSnapshotListenerEnabled: true' para que onSnapshot se dispare
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('addPostCollection', () => {
  it('Debería ser una función', () => {
    expect(typeof addPostCollection).toBe('function');
  });
  it('Debería poder agregar una nota', () => {
    addPostCollection('Andrea', 'estefi@gmail.com', 'arigato', 'abc321')
      .then(() => {
        getPosts().then((docRef) => {
          docRef.forEach((docAboutCollection) => {
            const result = docAboutCollection.data().find((note) => note.post === 'arigato');
            expect(result).toBe('arigato');
          });
        });
      });
  });
});

describe('getPosts', () => {
  it('getPosts deberia ser una función', () => {
    expect(typeof getPosts).toBe('function');
  });
  it('al ejecutarse getPosts deberia retornar un objeto', () => {
    getPosts().then((docRef) => {
      docRef.forEach((docAboutCollection) => {
        const postInfo = docAboutCollection.data();
        expect(typeof postInfo).toBe('object');
      });
    });
  });
});

describe('onGetPosts', () => {
  it('Debería ser una función', () => {
    expect(typeof onGetPosts).toBe('function');
  });
  it('Debería retornar los post actualizados', () => {
    onGetPosts(() => {
      getPosts().then((docRef) => {
        docRef.forEach((docAboutCollection) => {
          if (docAboutCollection.data().id === 'abc321') {
            expect(docAboutCollection.data().post).toBe('arigato');
          }
        });
      });
    });
  });
});

describe('deletePost', () => {
  it('deletePost debería ser una función', () => {
    expect(typeof deletePost).toBe('function');
  });
  it('deletePost debería borrar el post con id:a3b3c3', () => {
    deletePost('a3b3c3')
      .then((postInfo) => {
        expect(postInfo).toBe(undefined);
        getPosts();
      });
  });
});

describe('updatePost', () => {
  it('updatePost deberia ser una función', () => {
    expect(typeof updatePost).toBe('function');
  });
  it('Debería poder actualizar un post', () => {
    updatePost('a3b2c3', 'No quiero compartir nada');
    getPosts().then((docRef) => {
      docRef.forEach((docAboutCollection) => {
        if (docAboutCollection.data().id === 'user3') {
          expect(docAboutCollection.data().post).toBe('No quiero compartir nada');
        }
      });
    });
  });
});

describe('updateLoves', () => {
  it('Debería ser una función', () => {
    expect(typeof updateLoves).toBe('function');
  });
  it('Debería poder sumar un likes', () => {
    const user6 = {
      userEmail: 'pepito@hotmail.com',
      userID: 'user6',
    };
    getPosts().then((docRef) => {
      docRef.forEach((docAboutCollection) => {
        if (docAboutCollection.data().id === 'user3') {
          const userLikes = docAboutCollection.data().likes;
          const filterLikeByIdUser = userLikes.filter((like) => like.userID === 'user3');
          const filterLikeByIdOtherUser = userLikes.filter((like) => like.userID !== 'user3');
          if (filterLikeByIdUser.length !== 0) {
            updateLoves('user3', filterLikeByIdOtherUser);
            expect(filterLikeByIdUser).toBeUndefined();
            expect(filterLikeByIdUser).toBeNull();
            expect(filterLikeByIdUser).toBeFalsy();
          } else {
            userLikes.push(user6);
            updateLoves('user3', userLikes);
            expect(filterLikeByIdUser).not.toBeFalsy();
            expect(filterLikeByIdUser).not.toBeUndefined();
            expect(filterLikeByIdUser).not.toBeNull();
          }
        }
      });
    });
  });
});

describe('getPostsUserId', () => {
  it('Debería ser una función', () => {
    expect(typeof getPostsUserId).toBe('function');
  });
  it('Debería retornar el post según Id', () => {
    getPostsUserId('a1b2c3')
      .then((postInfo) => {
        expect(postInfo.data().post).toBe('hello!');
      });
  });
  it('Debería retornar los likes según Id', () => {
    getPostsUserId('a1b2c3')
      .then((postInfo) => {
        expect(postInfo.data().likes).toBeFalsy();
      });
  });
});
