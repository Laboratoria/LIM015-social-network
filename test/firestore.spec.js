import MockFirebase from 'mock-cloud-firestore';

import {
    sharePost,
    getPost,
    editPost,
    deletePost,
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
          },
        },
    },
  },
};


global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


describe('Agrega los post', () => {
  it('Deberia añadir un post', () => sharePost( 'hola que tal', 'rita@hotmail.com', 'rita', '', '', 'public', '' )
  .then(() => getPost(
      (data) => {
          const result = data.find(postGetPost => postGetPost.postText === 'hola que tal');
          expect(result.postText).toBe('hola que tal');
      },
  )));
});

describe('Edit Post', () => {
  it('Deberia actualizar editar del post', () => editPost('id_001', 'post editado')
    .then(() =>  getPost(
      (data) => {
        const result = data.find((posts) => posts.postText === 'post editado');
        expect(result.postText).toBe('post editado');
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