import MockFirebase from 'mock-cloud-firestore';

import {
  sharePost,
  getPost,
  editPost,
  deletePost,
  addLikeDb,
  deleteLikeDb,
  getLike,
} from '../src/firebase/data-base';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        id_001: {
          idUser: '001',
          mail: 'prueba@test.com',
          timePost: '',
          mode: 'Public',
          postText: 'Primera publicación',
          Photo: '',
          likes: '',
          user: 'Prueba Test',
          __collection__: {
            likes: {
              __doc__: {
                xyz012: {
                  iduser: 'xyz012',
                  idPost: 'abcd123456',
                  email: 'prueba@gmail.com',
                },
              },
            },
          },
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('Agrega los post', () => {
  it('Deberia añadir un post', () => sharePost('hola que tal', 'id_002', 'rita@hotmail.com', 'rita', '', '', 'public', '')
    .then(() => getPost(
      (data) => {
        const result = data.find((postGetPost) => postGetPost.postText === 'hola que tal');
        expect(result.postText).toBe('hola que tal');
      },
    )));
});

describe('Edit Post', () => {
  it('Deberia actualizar editar del post', () => editPost('id_001', 'hola que tal')
    .then(() => getPost(
      (data) => {
        const result = data.find((postGetPost) => postGetPost.postText === 'hola que tal');
        expect(result.postText).toBe('hola que tal');
      },
    )));
});

describe('Delete Post', () => {
  it('Debería poder eliminar un post', () => deletePost('id_001')
    .then(() => getPost(
      (data) => {
        const result = data.find((posts) => posts.id === 'id_001');
        expect(result).toBe(undefined);
      },
    )));
});

describe('addLikeDb', () => {
  it('deberia agregar like a un post', (done) => {
    addLikeDb('xyz012', 'abcd123456', 'prueba@gmail.com')
      .then(() => {
        getLike(
          'abcd123456',
          (likes) => {
            const result = likes.find((post) => post.iduser === 'xyz012');
            expect(result.iduser).toBe('xyz012');
          },
          () => { done(); },
        );
      });
  });
});

describe('deleteLikeDb', () => {
  it('deberia eliminar un like al post dado', (done) => {
    deleteLikeDb('xyz012', 'abcd123456')
      .then(() => {
        getLike(
          'abcd123456',
          (likes) => {
            const result = likes.find((elemento) => elemento.id === 'xyz012');
            expect(result).toBe(undefined);
          },
          () => { done(); },
        );
      });
  });
});
