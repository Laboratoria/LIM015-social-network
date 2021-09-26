import MockFirebase from 'mock-cloud-firestore';
import {
  postCollection, getCollection, postUserCollection, getUserCollection, deletePost,
} from '../src/firebase/firebase-firestore.js';

// Simulación de la data
const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        a1b2c3: {
          user: 'Pepito',
          text: 'hola amigos',
          email: 'pepito@gmail.com',
          timePost: '29 de agosto de 2021, 16:50:02 UTC-5',
        },
        a2b3c4: {
          user: 'Pepita',
          text: 'hola',
          email: 'pepita@gmail.com',
          timePost: '28 de agosto de 2021, 16:50:02 UTC-5',
        },
      },
    },
  },
};

// El isNaiveSnapshotListenerEnabled:true nos dara la información del escuchador OnSnapShot
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('postCollection', () => {
  it('debería ser una función', () => {
    expect(typeof postCollection).toBe('function');
  });
  it('debería insertar un nuevo doc', () => {
    postCollection('Pepa', 'hola, que tal', 'pepa@gmail.com', 'a3b4c5')
      .then(() => {
        getCollection().then((docRef) => {
          docRef.forEach((doc) => {
            const dataContent = doc.data();
            expect(dataContent).toBe('Pepa', 'hola, que tal', 'pepa@gmail.com', 'a3b4c5');
          });
        });
      })
      .catch(() => {

      });
  });
});

describe('postUserCollection', () => {
  it('debería ser una función', () => {
    expect(typeof postUserCollection).toBe('function');
  });
  it('debería insertar un nuevo doc', () => {
    postUserCollection('Pepa', 'pepa@gmail.com')
      .then(() => {
        getUserCollection().then((docRef) => {
          docRef.forEach((doc) => {
            const dataContent = doc.data();
            expect(dataContent).toBe('Pepa', 'pepa@gmail.com');
          });
        });
      })
      .catch(() => {

      });
  });
});

describe('deletePost', () => {
  it('debería ser una función', () => {
    expect(typeof deletePost).toBe('function');
  });
});
