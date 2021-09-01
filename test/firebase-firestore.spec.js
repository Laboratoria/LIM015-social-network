// 1. Instalar 'npm install --save-dev mock-cloud-firestore'
// 2. Anular la variable global firebase
// 3. Importar la dependencia por defecto desde node_modules file 'mock-cloud-firestore'
// 4. Crear una constante que sea nuestro simulador de firebase y reemplazarlo a nivel global
// documentación: https://www.npmjs.com/package/mock-cloud-firestore
import MockFirebase from 'mock-cloud-firestore';
import {
  addPostCollection,
  getPosts,
  deletePost,
  updatePost,
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
});
